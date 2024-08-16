import { JsonValue } from "type-fest";
import { Visit } from "../visit/Visit";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  visits?: Array<Visit>;
};
