import { InputJsonValue } from "../../types";
import { VisitUpdateManyWithoutUsersInput } from "./VisitUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  visits?: VisitUpdateManyWithoutUsersInput;
};
