export * from './{{dashCase name}}.component';
export * from './{{dashCase name}}.types';
{{#if service}}
export * from './{{dashCase name}}.service';
export * from './{{dashCase name}}-data.service';
{{/if}}
export * from './{{dashCase name}}.module';