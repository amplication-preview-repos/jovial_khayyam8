import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { UserTitle } from "../user/UserTitle";

export const VisitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="city">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="visitDate" source="visitDate" />
      </SimpleForm>
    </Create>
  );
};
