import { {{pascalCase name}}Component } from "./{{dashCase name}}.component";
import { createHostComponentFactory, SpectatorWithHost } from "@netbasal/spectator";
import { TranslateMock } from "@datorama/tests/utils";

describe("{{pascalCase name}}Component", () => {

  let host: SpectatorWithHost<{{pascalCase name}}Component>;
  const createHost = createHostComponentFactory({
    component: {{pascalCase name}}Component,
    declarations: [
      TranslateMock
    ],
  });

  it("should be defined", () => {
    {{#if platform}}
    host = createHost(`<da-{{dashCase name}}></da-{{dashCase name}}>`);
    {{else}}
    host = createHost(`<dato-{{dashCase name}}></dato-{{dashCase name}}>`);
    {{/if}}
    expect(host.component).toBeDefined();
  });

});
