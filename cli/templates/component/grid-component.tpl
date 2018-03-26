import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import { {{pascalCase name}}Service} from "@datorama/modules/admin/{{dashCase name}}/{{dashCase name}}.service";
import {Example} from "@datorama/modules/admin/{{dashCase name}}/{{dashCase name}}.types";
import {DatoGrid, DatoSnackbar, GridColumns, RowSelectionType, ToolbarAction} from "@datorama/core";
import {concatMap, tap} from 'rxjs/operators';

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

    this.{{camelCase name}}Service.getUsers()
      .pipe(tap((users) => {
        this.users = users;
        this.cdr.detectChanges();
      }))
      .pipe(concatMap(() => this.datoGridReady))
      .subscribe(() => {
        this.setRows(this.users);
      }, this.handleError.bind(this));
  }

  /**
   * Change to the appropriate name
   */
  actionOnClick() {
    const selectedData = this.getSelectedRows(true);

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
   * @param err
   */
  private handleError(err) {
    this.snackbar.error('admin.loggedUsers.error');
  }
}

angular
  .module('app.components')
  .directive('da{{pascalCase name}}', downgradeComponent({
    component: {{pascalCase name}}Component
  }) as angular.IDirectiveFactory);
