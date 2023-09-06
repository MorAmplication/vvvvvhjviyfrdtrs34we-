import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "firstName";

export const AmitTitle = (record: TAmit): string => {
  return record.firstName || String(record.id);
};
