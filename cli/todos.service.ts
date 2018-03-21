import { Injectable } from "@angular/core";
import { TodosDataService } from './todos-data.service';

@Injectable()
export class TodosService {

  constructor(private todos: TodosDataService) {
  }

}
