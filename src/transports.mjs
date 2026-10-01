import { createService } from "./service.mjs";
import { ResponseLost } from "./contract.mjs";
function abortable(promise, signal) {
  if (!signal) return promise;
  return new Promise((resolve, reject) => {
    const stop = () => reject(new ResponseLost());
    if (signal.aborted) return stop();
    signal.addEventListener("abort", stop, { once: true });
    promise
      .then(resolve, reject)
      .finally(() => signal.removeEventListener("abort", stop));
  });
}
export function browserTransport({ onJournal = () => {}, delayMs } = {}) {
  let service;
  service = createService({
    delayMs,
    onEvent: () => queueMicrotask(() => onJournal(service.journal())),
  });
  return {
    kind: "simulation",
    submit: (p, signal) => abortable(service.submit(p), signal),
    status: (key, behavior) => service.status(key, behavior),
    journal: async () => service.journal(),
  };
}
export function httpTransport({
  base = "",
  session = crypto.randomUUID(),
  onJournal = () => {},
} = {}) {
  async function call(path, data, signal) {
    const r = await fetch(base + "/api/" + path, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ session, ...data }),
      signal,
      cache: "no-store",
    });
    const body = await r.json();
    return { status: r.status, body };
  }
  async function journal() {
    const r = await call("journal", {});
    if (r.status !== 200) throw new Error("journal_unavailable");
    onJournal(r.body);
    return r.body;
  }
  return {
    kind: "http",
    submit: async (p, signal) => {
      try {
        return await call("submit", p, signal);
      } finally {
        journal().catch(() => {});
      }
    },
    status: async (key, behavior) => {
      try {
        return await call("status", { key, behavior });
      } finally {
        journal().catch(() => {});
      }
    },
    journal,
  };
}
