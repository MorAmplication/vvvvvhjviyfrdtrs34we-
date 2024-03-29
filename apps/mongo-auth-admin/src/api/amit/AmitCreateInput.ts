import { InputJsonValue } from "../../types";

export type AmitCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
