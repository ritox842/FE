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

  plop.setGenerator('Core component', {
    description: 'Create a new core component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter the component name'
    }].concat({
      type: 'confirm',
      name: 'grid',
      message: 'It\'s a Grid?'
    }, {
      type: 'confirm',
      name: 'service',
      message: 'Do you need a Service?'
    }).concat(chooseDirAction),
    actions: function(data) {
      const actions = [{
          type: 'add',
          path: buildPath("{{'dashCase' name}}.theme.scss", data.directory, true),
          templateFile: './templates/core-component/core-component.theme.tpl'
        },
        {
          type: 'add',
          path: buildPath("public_api.ts", data.directory, true),
          templateFile: './templates/core-component/public_api.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.html", data.directory, true),
          templateFile: './templates/core-component/componentView.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.scss", data.directory, true),
          templateFile: './templates/core-component/componentStyle.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.module.ts", data.directory, true),
          templateFile: './templates/core-component/module.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.types.ts", data.directory, true),
          templateFile: './templates/core-component/types.tpl'
        }
      ];

      if (data.grid) {
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.ts", data.directory, true),
          templateFile: './templates/core-component/grid.tpl'
        })
      } else {
        actions.push({
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.ts", data.directory, true),
          templateFile: './templates/core-component/component.tpl'
        })
      }

      if (data.service) {
        actions.push({
          type: 'add',
          path: buildPath("./{{'dashCase' name}}.service.ts", data.directory, true),
          templateFile: './templates/service/service.tpl'
        });

        actions.push({
          type: 'add',
          path: buildPath("./{{'dashCase' name}}-data.service.ts", data.directory, true),
          templateFile: './templates/store/data-service.tpl'
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

  /* Component */
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter a Component Name (camelCase)'
    }].concat(directoryActions),
    actions: function(data) {
      return [{
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.ts", data.directory, data.createDir),
          templateFile: './templates/component/component.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.html", data.directory, data.createDir),
          templateFile: './templates/component/componentView.tpl'
        },
        {
          type: 'add',
          path: buildPath("{{'dashCase' name}}.component.scss", data.directory, data.createDir),
          templateFile: './templates/component/componentStyle.tpl'
        }
      ];
    }
  });

  /* Service */
  plop.setGenerator('Service', {
    description: 'Create a new Service',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Please Enter a Service Name (camelCase)'
    }],
    actions: [{
      type: 'add',
      path: "./{{'dashCase' name}}.service.ts",
      templateFile: './templates/service/service.tpl'
    }]
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
