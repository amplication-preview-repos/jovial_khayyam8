import { VisitUpdateManyWithoutCitiesInput } from "./VisitUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  visits?: VisitUpdateManyWithoutCitiesInput;
};
