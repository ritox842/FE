import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import { {{pascalCase name}}Service} from "@datorama/modules/admin/{{dashCase name}}/{{dashCase name}}.service";
import {Example} from "@datorama/modules/admin/{{dashCase name}}/{{dashCase name}}.types";
import {DatoGrid, DatoSnackbar, GridColumns, RowSelectionType, ToolbarAction} from "@datorama/core";

@Component({
  selector: 'da-{{dashCase name}}',
  templateUrl: './{{dashCase name}}.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class {{pascalCase name}}Component extends DatoGrid<Example> implements OnInit {
  /** Change data and Example to the appropriate name */
  data: Example[];

  constructor(private {{camelCase name}}Service: {{pascalCase name}}Service,
              private snackbar: DatoSnackbar,
              private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.toolbarActions = this.getToolbarActions();
    this.fetchData();
  }

  /**
   * Change to the appropriate name
   */
  actionOnClick() {
    const selectedData = this.getSelectedRow();

    this.{{camelCase name}}Service.action(selectedData).subscribe(() => {
      this.removeRows(selectedData);
      this.snackbar.info('translate.string');
    }, (err) => {
      this.snackbar.error('translate.string');
    });
  }

  /**
   *
   * @returns {ToolbarAction[]}
   */
  getToolbarActions(): ToolbarAction[] {
    return [
      {
        text: 'translate.string',
        showWhen: RowSelectionType.SINGLE,
        click: this.actionOnClick.bind(this)
      }
    ];
  }

  /**
   *
   * @returns {GridColumns}
   */
  getColumns(): GridColumns {
    return [
      {
        field: 'id',
        headerName: 'translate.value'
      }
    ];
  }

  /**
   *
   * @param {Example[]} value
   * @returns {Partial<Example>[]}
   */
  getRows(value: Example[]): Partial<Example>[] {
    return value;
  }

  /**
   *
   * @param $event
   */
  ready($event) {
    this.gridApi = $event.api;
    this.setRows(this.data);
  }

  /**
   *
   * @returns {Subscription}
   */
  private fetchData() {
    return this.{{camelCase name}}Service.getUsers().subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges();
    });
  }

}

angular
  .module('app.components')
  .directive('da{{pascalCase name}}', downgradeComponent({
    component: {{pascalCase name}}Component
  }) as angular.IDirectiveFactory);
