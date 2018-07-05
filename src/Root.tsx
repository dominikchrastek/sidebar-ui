// @flow strict
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import * as Routes from "./scenes";

const Root = () => (
  <Switch>
    <Route path="/" exact={true} component={Routes.Posts} />
    <Route path="/detail/:id" exact={true} component={Routes.PostDetail} />
  </Switch>
);

export default Root;
