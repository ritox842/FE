import { createService } from "@netbasal/spectator";
import { {{pascalCase name}}Service } from "./{{dashCase name}}.service";
import { {{pascalCase name}}DataService } from "./{{dashCase name}}-data.service";

describe('{{pascalCase name}}Service', () => {
    const spectator = createService({
      service: {{pascalCase name}}Service,
      mocks: [{{pascalCase name}}DataService]
    });

    it('should...', () => {

    });

});
