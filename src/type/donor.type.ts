import type { TBloodGroup } from "../constants/bloodGroup";
import type { TUpozilaPabna } from "../constants/upozila";

export type TDonor = {
  name: string;
  email: string;
  phoneNumber: string;
  availability: boolean;
  bloodGroup: TBloodGroup;
  upozila: TUpozilaPabna;
  accountVisibility: "public" | "private";
  isDeleted: boolean;
};
