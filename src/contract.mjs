export const VERSION = "1.0.0";
export const FIELDS = ["firstName", "lastName", "email", "request"];
export const SCENARIOS = ["A", "B", "C", "D"];
export const LIMITS = {
  firstName: [1, 100],
  lastName: [1, 100],
  email: [1, 254],
  request: [10, 2000],
};
export const DELAY_MS = 4000;
export const blank = () => Object.fromEntries(FIELDS.map((k) => [k, ""]));
export const example = (locale = "fr") => ({
  firstName: "Camille",
  lastName: "D’Arcy-Morel",
  email: "camille@example.test",
  request:
    locale === "en"
      ? "Fictional request to examine errors and check receipt."
      : "Demande fictive pour examiner les erreurs et vérifier une réception.",
});
export function normalize(fields) {
  return Object.fromEntries(
    FIELDS.map((k) => [
      k,
      typeof fields?.[k] === "string"
        ? fields[k].replace(/\r\n?/g, "\n").normalize("NFC").trim()
        : "",
    ]),
  );
}
export function validate(fields) {
  const values = normalize(fields),
    errors = {};
  for (const k of FIELDS) {
    const n = [...values[k]].length,
      [min, max] = LIMITS[k];
    if (!n) errors[k] = "required";
    else if (n < min) errors[k] = "short";
    else if (n > max) errors[k] = "long";
    else if (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(values[k]))
      errors[k] = "format";
  }
  return errors;
}
// Fixed field order, NFC, edge whitespace trimmed, LF. Never serialize scenario/UI settings.
export function canonical(fields) {
  return JSON.stringify(normalize(fields));
}
export const validKey = (k) =>
  typeof k === "string" && /^[a-zA-Z0-9-]{16,80}$/.test(k);
export function preset(url) {
  try {
    const u = new URL(url),
      p = new URLSearchParams(u.hash.slice(1));
    return [...p.keys()].every((k) => k === "scenario") &&
      SCENARIOS.includes(p.get("scenario"))
      ? p.get("scenario")
      : "A";
  } catch {
    return "A";
  }
}
export function shareURL(locale, scenario) {
  return new URL(
    (locale === "en" ? "index-en.html" : "./") +
      "#scenario=" +
      (SCENARIOS.includes(scenario) ? scenario : "A"),
    "https://edikkaweb.github.io/accessible-form-demo/",
  ).href;
}
export class ResponseLost extends Error {
  constructor() {
    super("response_lost");
    this.name = "ResponseLost";
  }
}
