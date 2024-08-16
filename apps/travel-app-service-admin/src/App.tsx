import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VisitList } from "./visit/VisitList";
import { VisitCreate } from "./visit/VisitCreate";
import { VisitEdit } from "./visit/VisitEdit";
import { VisitShow } from "./visit/VisitShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TravelAppService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Visit"
          list={VisitList}
          edit={VisitEdit}
          create={VisitCreate}
          show={VisitShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
