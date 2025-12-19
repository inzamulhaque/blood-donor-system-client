export const UPOZILAS_PABNA = [
  "Pabna Sadar",
  "Ishwardi",
  "Bera",
  "Bhangura",
  "Chatmohar",
  "Faridpur",
  "Santhia",
  "Sujanagar",
  "Atgharia",
] as const;

export type TUpozilaPabna = (typeof UPOZILAS_PABNA)[number];

export const UPOZILAS_PABNA_OPTIONS = UPOZILAS_PABNA.map((upozila) => ({
  value: upozila,
  label: upozila,
}));
