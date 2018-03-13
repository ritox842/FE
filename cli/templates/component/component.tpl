import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";

@Component({
  {{#if platform}}
  selector: 'da-{{dashCase name}}',
 {{else}}
  selector: 'dato-{{dashCase name}}',
 {{/if}}
  templateUrl: './{{dashCase name}}.component.html',
  {{#if !platform}}
  styleUrls: ['./{{dashCase name}}.component.scss'],
 {{/if}}
  changeDetection: ChangeDetectionStrategy.OnPush
})
{{#if platform}}
export class {{pascalCase name}}Component implements OnInit, OnDestroy {
{{else}}
export class Dato{{pascalCase name}}Component implements OnInit, OnDestroy
{{/if}}
  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy {

  }

}
