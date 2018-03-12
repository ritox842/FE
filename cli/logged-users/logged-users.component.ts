import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import { loggedUsersService} from "@datorama/modules/admin/logged-users/logged-users.service";
import {Example} from "@datorama/modules/admin/logged-users/logged-users.types";
import {DatoGrid, DatoSnackbar, GridColumns, RowSelectionType, ToolbarAction} from "@datorama/core";

@Component({
  selector: 'dato-logged-users',
  templateUrl: './logged-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedUsersComponent extends DatoGrid<Example> implements OnInit {
  /** Change data and Example to the appropriate name */
  data: Example[];

  constructor(private loggedUsersService: LoggedUsersService,
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

    this.loggedUsersService.action(selectedData).subscribe(() => {
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
        headerName: 'Account Id'
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
    return this.loggedUsersService.getUsers().subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges();
    });
  }

}

angular
  .module('app.components')
  .directive('daLoggedUsers', downgradeComponent({
    component: LoggedUsersComponent
  }) as angular.IDirectiveFactory);
