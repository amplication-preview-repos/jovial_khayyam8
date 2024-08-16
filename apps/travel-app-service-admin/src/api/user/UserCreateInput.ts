import { InputJsonValue } from "../../types";
import { VisitCreateNestedManyWithoutUsersInput } from "./VisitCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  visits?: VisitCreateNestedManyWithoutUsersInput;
};
