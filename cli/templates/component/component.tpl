{{#if core}}
/**
 * @license
 * Copyright Datorama. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License 2.0 license that can be
 * found in the LICENSE file at https://github.com/datorama/client-core/blob/master/LICENSE
 */
{{/if}}

import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";

@Component({
  {{#if platform}}
  selector: 'da-{{dashCase name}}',
 {{else}}
  selector: 'dato-{{dashCase name}}',
 {{/if}}
  templateUrl: './{{dashCase name}}.component.html',
  {{#if core}}
  styleUrls: ['./{{dashCase name}}.component.scss'],
 {{/if}}
  changeDetection: ChangeDetectionStrategy.OnPush
})
{{#if platform}}
export class {{pascalCase name}}Component implements OnInit, OnDestroy {
{{else}}
export class Dato{{pascalCase name}}Component implements OnInit, OnDestroy {
{{/if}}
  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
