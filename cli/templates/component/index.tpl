{{#if core}}
/**
 * @license
 * Copyright Datorama. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License 2.0 license that can be
 * found in the LICENSE file at https://github.com/datorama/client-core/blob/master/LICENSE
 */
{{/if}}
export * from './{{dashCase name}}.component';
export * from './{{dashCase name}}.types';
{{#if service}}
export * from './{{dashCase name}}.service';
export * from './{{dashCase name}}-data.service';
{{/if}}
export * from './{{dashCase name}}.module';