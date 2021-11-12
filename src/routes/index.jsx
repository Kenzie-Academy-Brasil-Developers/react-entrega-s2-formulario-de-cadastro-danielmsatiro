import { useState } from "react";
import { Route, Switch } from "react-router";
import { Singup } from "../pages/Singup";
import { Success } from "../pages/Success";

export const Routes = () => {
  const [name, setName] = useState('')

  return (
    <Switch>
      <Route exact path="/">
        <Singup setName={setName}/>
      </Route>

      <Route exact path="/success">
        <Success name={name} />
      </Route>
    </Switch>
  );
};
