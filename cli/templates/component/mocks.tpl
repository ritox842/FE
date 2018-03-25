import {of} from "rxjs/observable/of";

export const users = [{}, {}];

export const dataServiceMock = {
  getUsers() {
    return of(users);
  }
};
