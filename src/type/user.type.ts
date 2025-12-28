import type { TAccStatus, TRole } from "../constants/userConstant";

export type TBlocked = {
  isBlocked: boolean;
  blockReason: string;
  blockedBy: number;
};

export type TUser = {
  name: string;
  email: string;
  phoneNumber: string;
  trackingNumber: number | string;
  role: TRole;
  accountStatus: TAccStatus;
  block?: TBlocked;
};
