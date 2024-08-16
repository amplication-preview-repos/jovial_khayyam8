import { Visit } from "../visit/Visit";

export type City = {
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
  visits?: Array<Visit>;
};
