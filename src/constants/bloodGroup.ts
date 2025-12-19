export const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
] as const;

export type TBloodGroup = (typeof BLOOD_GROUPS)[number];

export const BLOOD_GROUPS_OPTIONS = BLOOD_GROUPS.map((upozila) => ({
  value: upozila,
  label: upozila,
}));
