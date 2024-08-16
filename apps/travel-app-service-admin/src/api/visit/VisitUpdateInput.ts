import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitUpdateInput = {
  city?: CityWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  visitDate?: Date | null;
};
