import { JsonValue } from "type-fest";

export type Amit = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
