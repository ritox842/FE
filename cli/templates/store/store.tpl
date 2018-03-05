import { Injectable } from "@angular/core";
import { {{pascalCase name}} } from "./{{dashCase name}}.model";

export interface State extends EntityState<{{pascalCase name}}> {}

const initialState: State = {
  ...getInitialState()
};

@Injectable()
export class {{pascalCase name}}Store extends Store<State, {{pascalCase name}}> {
  constructor() {
    super(initialState);
  }
}

