import React from "react";

import { StoreProvider } from "../store";
import reducers from "../reducers"
import initialState from "../store/initialState"

import Todo from "../pages/todo";

export default () => (
  <StoreProvider initialState={initialState} reducer={reducers}>
    <Todo />
  </StoreProvider>
);
