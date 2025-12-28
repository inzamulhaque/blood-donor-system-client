export const Roles = {
  SUPER_ADMIN: "super-admin",
  ADMIN: "admin",
  DONOR: "donor",
  FINDER: "finder",
} as const;

export const AccStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export type TRole = (typeof Roles)[keyof typeof Roles];
export type TAccStatus = (typeof AccStatus)[keyof typeof AccStatus];
