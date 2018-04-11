import { createHTTPFactory, HTTPMethod } from "@netbasal/spectator";
import { {{pascalCase name}}DataService } from "./{{dashCase name}}-data.service";

describe('{{pascalCase name}}DataService', () => {
  const http = createHTTPFactory<{{pascalCase name}}DataService>({{pascalCase name}}DataService);

  it('can test ...get', () => {
    const { dataService, controller, expectOne } = http();

    dataService.get().subscribe();
    expectOne('todos', HTTPMethod.GET);
  });

  it('can test ...post', () => {
      let { dataService, controller, expectOne } = http();

      dataService.post(1).subscribe();

      const req = expectOne('todos', HTTPMethod.POST);
      expect(req.request.body['id']).toEqual(1);
    });
});
