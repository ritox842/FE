import { {{pascalCase name}}Component } from "./{{dashCase name}}.component";
import { createHostComponentFactory, SpectatorWithHost } from "@netbasal/spectator";

describe("{{pascalCase name}}Component", () => {

  let host: SpectatorWithHost<{{pascalCase name}}Component>;
  const createHost = createHostComponentFactory({
    component: {{pascalCase name}}Component
  });

  it("should be defined", () => {
    host = createHost(`<da-{{dashCase name}}></da-{{dashCase name}}>`);
    expect(host.component).toBeDefined();
  });

});
