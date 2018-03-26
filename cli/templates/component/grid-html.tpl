<ng-container *ngIf="data; else loading">
	<dato-grid-header [grid]="gridRef">..translate text</dato-grid-header>
	<dato-grid-toolbar [grid]="gridRef" class="mb-10" [actions]="toolbarActions"></dato-grid-toolbar>
	<dato-grid [options]="options" #gridRef></dato-grid>
</ng-container>

<ng-template #loading>
	<dato-loader pageLoader></dato-loader>
</ng-template>
