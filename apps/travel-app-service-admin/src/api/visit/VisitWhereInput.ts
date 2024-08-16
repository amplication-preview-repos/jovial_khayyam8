import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VisitWhereInput = {
  city?: CityWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  visitDate?: DateTimeNullableFilter;
};
