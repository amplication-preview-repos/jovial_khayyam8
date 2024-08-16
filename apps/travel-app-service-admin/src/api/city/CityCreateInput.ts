import { VisitCreateNestedManyWithoutCitiesInput } from "./VisitCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  visits?: VisitCreateNestedManyWithoutCitiesInput;
};
