module.exports = (plop) => {
  // create your generators here

  // Pages

  plop.setGenerator('page', {
    description: 'Create a custom page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{name}}/index.tsx',
        templateFile: 'plop-templates/page/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/pages/{{name}}.tsx',
        templateFile: 'plop-templates/page/index.test.tsx.hbs',
      },
    ],
  })

  // Core

  plop.setGenerator('service', {
    description: 'Create a custom service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/core/services/{{camelCase name}}.ts',
        templateFile: 'plop-templates/service/service.ts.hbs',
      },
      {
        type: 'add',
        path: '__tests__/core/services/{{camelCase name}}.test.ts',
        templateFile: 'plop-templates/service/service.test.ts.hbs',
      },
    ],
  })

  plop.setGenerator('redux slice', {
    description: 'Create a redux slice',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your redux slice name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/core/store/{{camelCase name}}/index.ts',
        templateFile: 'plop-templates/store/slice.ts.hbs',
      },
      {
        type: 'add',
        path: '__tests__/core/store/{{camelCase name}}/index.test.ts',
        templateFile: 'plop-templates/store/slice.test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/core/store/index.ts',
        templateFile: 'plop-templates/store/store.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/core/store/rootReducer.ts',
        templateFile: 'plop-templates/store/rootReducer.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/core/store/rootReducer.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: `import {{camelCase name}} from './{{camelCase name}}'`,
      },
      {
        type: 'append',
        path: 'src/core/store/rootReducer.ts',
        pattern: '/* PLOP_CONTENT */',
        template: '\t{{camelCase name}},',
      },
    ],
  })

  plop.setGenerator('util', {
    description: 'Create a custom util',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your util name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/core/utils/{{camelCase name}}.ts',
        templateFile: 'plop-templates/util/index.ts.hbs',
      },
      {
        type: 'add',
        path: '__tests__/core/utils/{{camelCase name}}.test.ts',
        templateFile: 'plop-templates/util/index.test.ts.hbs',
      },
    ],
  })

  // UI

  plop.setGenerator('boot', {
    description: 'boot',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is you boot element name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/boot/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/boot/boot.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('common component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/components/common/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/ui/components/common/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/index.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/ui/components/common/{{pascalCase name}}/style.module.scss',
        templateFile: 'plop-templates/style.module.scss.hbs',
      },
    ],
  })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/ui/components/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/index.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/ui/components/{{pascalCase name}}/style.module.scss',
        templateFile: 'plop-templates/style.module.scss.hbs',
      },
    ],
  })

  plop.setGenerator('hoc', {
    description: 'Create a custom react hoc',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hoc name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/hocs/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/hoc/hoc.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/ui/hocs/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/hoc/hoc.test.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/hooks/{{camelCase name}}.ts',
        templateFile: 'plop-templates/hook.ts.hbs',
      },
    ],
  })

  plop.setGenerator('view', {
    description: 'Create a view',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your view name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/ui/views/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/view/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '__tests__/ui/views/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/view/index.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/ui/views/{{pascalCase name}}/style.module.scss',
        templateFile: 'plop-templates/style.module.scss.hbs',
      },
    ],
  })
}
