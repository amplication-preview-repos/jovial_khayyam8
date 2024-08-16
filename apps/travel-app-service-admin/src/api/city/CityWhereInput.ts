import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VisitListRelationFilter } from "../visit/VisitListRelationFilter";

export type CityWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  visits?: VisitListRelationFilter;
};
