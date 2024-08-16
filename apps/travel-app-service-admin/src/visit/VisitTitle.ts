import { Visit as TVisit } from "../api/visit/Visit";

export const VISIT_TITLE_FIELD = "id";

export const VisitTitle = (record: TVisit): string => {
  return record.id?.toString() || String(record.id);
};
