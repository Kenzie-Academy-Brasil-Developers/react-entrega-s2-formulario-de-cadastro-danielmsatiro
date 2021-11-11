import { Route, Switch } from "react-router";
import { Singup } from "../pages/Singup";
import { Success } from "../pages/Success";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Singup />
      </Route>

      <Route exact path="/success">
        <Success />
      </Route>
    </Switch>
  );
};
