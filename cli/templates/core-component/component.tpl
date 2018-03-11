import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

@Component({
  selector: 'dato-{{dashCase name}}',
  templateUrl: './{{dashCase name}}.component.html',
  styleUrls: ['./{{dashCase name}}.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dato{{pascalCase name}}Component implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }

}