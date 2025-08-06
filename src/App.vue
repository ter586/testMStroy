<script setup lang="ts">
  import { type Item, TreeStore } from './TreeStore';
  import { AgGridVue } from 'ag-grid-vue3';
  import type {
    GetRowIdParams,
    IsFullWidthRowParams,
    ValueGetterParams,
  } from 'ag-grid-enterprise';

  const items: Item[] = [
    { id: 1, parent: null, label: 'Айтем 1' },
    { id: '2', parent: 1, label: 'Айтем 2' },
    { id: 3, parent: 1, label: 'Айтем 3' },
    { id: 4, parent: '2', label: 'Айтем 4' },
    { id: 5, parent: '2', label: 'Айтем 5' },
    { id: 6, parent: '2', label: 'Айтем 6' },
    { id: 7, parent: 4, label: 'Айтем 7' },
    { id: 8, parent: 4, label: 'Айтем 8' },
  ];
  const treeStore: TreeStore = new TreeStore(items);
  const rowData = treeStore.getAll();
  const colDefs = [
    {
      field: '',
      width: 100,
      headerName: '№ п\\п',
      valueGetter: (params: ValueGetterParams) => {
        if (params.node && params.node.rowIndex != null) {
          return params.node.rowIndex + 1;
        }
      },
    },
    {
      field: 'label',
      headerName: 'Наименование',
      flex: 1,
    },
  ];
  const getRowId = (params: GetRowIdParams<Item>) => params.data.id.toString();
  const treeDataParentIdField = 'parent';
  const autoGroupColumnDef = {
    minWidth: 300,
    headerName: 'Категория',
    pinned: null,
    valueGetter: (params: ValueGetterParams<Item>) => {
      if (params.data?.id) {
        return treeStore.getChildren(params.data.id).length > 0
          ? 'Группа'
          : 'Элемент';
      }
    },
    cellRendererParams: {
      suppressCount: true,
    },
  };
  const isFullWidthRow = (params: IsFullWidthRowParams) => {
    return params.rowNode.data.fullWidth;
  };
</script>

<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    :tree-data="true"
    :getRowId="getRowId"
    :tree-data-parent-id-field="treeDataParentIdField"
    :autoGroupColumnDef="autoGroupColumnDef"
    :groupDefaultExpanded="-1"
    :isFullWidthRow="isFullWidthRow"
    style="height: 500px; width: 700px"
  >
  </ag-grid-vue>
</template>

<style scoped></style>
