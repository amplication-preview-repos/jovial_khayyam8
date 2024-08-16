import { City } from "../city/City";
import { User } from "../user/User";

export type Visit = {
  city?: City | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  visitDate: Date | null;
};
