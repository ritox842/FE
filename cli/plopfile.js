const promptDirectory = require('inquirer-directory');
const path = require('path');

module.exports = function(plop) {

  const basePath = process.cwd();

  plop.setPrompt('directory', promptDirectory);

  const chooseDirAction = {
    type: 'directory',
    name: 'directory',
    message: 'Where do you want to create the component?',
    basePath: basePath
  };

  const directoryActions = [chooseDirAction,
    {
      type: 'input',
      name: 'createDir',
      message: 'Do you want to create a new directory?'
    }
  ];

  plop.setGenerator('Component', {
    description: 'Create a new component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'Please Enter the component name'
      }]
      .concat({
        type: 'confirm',
        name: 'platform',
        message: 'It\'s a platorm component?'
      }, {
        type: 'confirm',
        name: 'grid',
        default: false,
        message: 'It\'s a Grid?'
      }, {
        type: 'confirm',
        name: 'service',
        default: false,
        message: 'Do you need a service?'
      }).concat(chooseDirAction),
    actions: function(data) {
      data.core = !data.platform;

      const actions = [{
          type: 'add',
          path: buildPath("{{'dashCase' name}}.theme.scss", data.directory, true),
          templateFile: './templates/component/theme.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.scss", data.directory, true),
          templateFile: './templates/component/sass.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.module.ts", data.directory, true),
          templateFile: './templates/component/module.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.types.ts", data.directory, true),
          templateFile: './templates/component/types.tpl'
        },
      ];

      if (data.grid) {
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.ts", data.directory, true),
          templateFile: './templates/component/grid-component.tpl'
        });

        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.html", data.directory, true),
          templateFile: './templates/component/grid-html.tpl'
        });

        actions.push({
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.component.spec.ts", data.directory, true),
          templateFile: './templates/component/grid-spec.tpl'
        });

      } else {
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.ts", data.directory, true),
          templateFile: './templates/component/component.tpl'
        });
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.html", data.directory, true),
          templateFile: './templates/component/component-html.tpl'
        });
        actions.push({
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.component.spec.ts", data.directory, true),
          templateFile: './templates/component/component-spec.tpl'
        });
      }


      if (data.service) {
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}-data.service.spec.ts", data.directory, true),
          templateFile: './templates/component/data-service-spec.tpl'
        }, {
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.service.ts", data.directory, true),
          templateFile: './templates/service/service.tpl'
        }, {
          type: 'add',
          path: buildPath("./{{'dashCase' name}}-data.service.ts", data.directory, true),
          templateFile: './templates/store/data-service.tpl'
        }, {
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.service.spec.ts", data.directory, true),
          templateFile: './templates/component/service-spec.tpl'
        });

      }

      if (!data.platform) {
        actions.push({
          type: 'add',
          path: buildPath("public_api.ts", data.directory, true),
          templateFile: './templates/component/public_api.tpl'
        })
      } else {
        actions.push({
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.mocks.ts", data.directory, true),
          templateFile: './templates/component/mocks.tpl'
        });
      }


      return actions;
    }
  });

  plop.setGenerator('Core Preview Component', {
    description: 'Create a new core component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter the component name'
    }].concat(chooseDirAction),
    actions: function(data) {
      const actions = [{
          type: 'add',
          path: buildPath("{{'dashCase' name}}-preview.component.ts", data.directory, true, true),
          templateFile: './templates/preview/component.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}-preview.component.html", data.directory, true, true),
          templateFile: './templates/preview/html.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}-preview.component.scss", data.directory, true, true),
          templateFile: './templates/preview/style.tpl'
        }
      ];

      return actions;
    }
  });

  /* Directive */
  plop.setGenerator('Directive', {
    description: 'Create a new Directive',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter a directive Name (camelCase)'
    }].concat(directoryActions),
    actions: function(data) {
      var action = {
        type: 'add',
        path: buildPath("{{'dashCase' name}}.directive.ts", data.directory, data.createDir),
        templateFile: './templates/directive/directive.tpl'
      };

      return [action];
    }
  });

  /* Service */
  plop.setGenerator('Service', {
    description: 'Create a new Service',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter a Service Name (camelCase)'
    }].concat(directoryActions),
    actions: function(data){
      return [
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.service.ts", data.directory, data.createDir),
          templateFile: './templates/service/service.tpl'
        }
      ]
    }
  });

  /* Interface */
  plop.setGenerator('Interface', {
    description: 'Create a new Interface',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter a Interface Name (camelCase)'
    }].concat(directoryActions),
    actions: function(data) {
      return [{
        type: 'add',
        path: buildPath("{{'dashCase' name}}.interface.ts", data.directory, data.createDir),
        templateFile: './templates/interface/interface.tpl'
      }];
    }
  });

  /* Store */
  plop.setGenerator('DA Store', {
    description: 'Datorama store',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Store name'
    }].concat([chooseDirAction]),
    actions: function(data) {
      return [{
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}.model.ts"),
          templateFile: './templates/store/model.tpl'
        },
        {
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}.providers.ts"),
          templateFile: './templates/store/providers.tpl'
        },
        {
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}.store.ts"),
          templateFile: './templates/store/store.tpl'
        },
        {
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}.service.ts"),
          templateFile: './templates/store/service.tpl'
        },
        {
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}-data.service.ts"),
          templateFile: './templates/store/data-service.tpl'
        },
        {
          type: 'add',
          path: genPath(data.directory, "./config/{{'dashCase' name}}.query.ts"),
          templateFile: './templates/store/query.tpl'
        }
      ];
    }
  });

  function genPath(directory, file) {
    return path.resolve(basePath, directory, file);
  }

  function buildPath(name, baseLocalPath, createDir, preview) {
    var path = name;
    if (createDir !== 'n') {
      path = `/{{'dashCase' name}}${preview ? '-preview' : ''}/${name}`;
    }
    return basePath + "/" + baseLocalPath + "/" + path;
  }

};
