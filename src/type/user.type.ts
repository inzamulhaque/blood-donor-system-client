import {
  AccStatus,
  Roles,
  type TAccStatus,
  type TRole,
} from "../constants/userConstant";

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
  blockStatus?: TBlocked;
};

export const userTestData = [
  {
    name: "MD Inzamul Haque",
    email: "inzamul@admin.com",
    phoneNumber: "01710000001",
    trackingNumber: 1001,
    role: Roles.SUPER_ADMIN,
    accountStatus: AccStatus.ACTIVE,
  },
  {
    name: "Rahim Uddin",
    email: "rahim@admin.com",
    phoneNumber: "01710000002",
    trackingNumber: "TRK-1002",
    role: Roles.ADMIN,
    accountStatus: AccStatus.ACTIVE,
  },
  {
    name: "Karim Donor",
    email: "karim@donor.com",
    phoneNumber: "01710000003",
    trackingNumber: 1003,
    role: Roles.DONOR,
    accountStatus: AccStatus.ACTIVE,
  },
  {
    name: "Sadia Finder",
    email: "sadia@finder.com",
    phoneNumber: "01710000004",
    trackingNumber: "TRK-1004",
    role: Roles.FINDER,
    accountStatus: AccStatus.INACTIVE,
    blockStatus: {
      isBlocked: true,
      blockReason: "Violation of community rules",
      blockedBy: 1,
    },
  },
  {
    name: "Hasan Donor",
    email: "hasan@donor.com",
    phoneNumber: "01710000005",
    trackingNumber: 1005,
    role: Roles.DONOR,
    accountStatus: AccStatus.INACTIVE,
    blockStatus: {
      isBlocked: true,
      blockReason: "Multiple fake requests",
      blockedBy: 2,
    },
  },
];
