import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dato-{{dashCase name}}',
  templateUrl: './{{dashCase name}}-preview.component.html',
  styleUrls: ['./{{dashCase name}}-preview.component.scss']
})
export class {{pascalCase name}}PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
