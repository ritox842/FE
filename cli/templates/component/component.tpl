import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";

/**
 * Component Description
 * @example ...
 * */
@Component({
  selector: 'da-{{dashCase name}}',
  templateUrl: './{{dashCase name}}.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class {{pascalCase name}}Component implements OnInit, OnDestroy {
  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}