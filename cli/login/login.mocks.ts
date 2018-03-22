import {of} from "rxjs/observable/of";

export const dataServiceMock = {
  getUsers() {
    return of([]);
  }
};
