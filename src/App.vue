<script setup lang="ts">
  import { onMounted } from 'vue';
  import { type Item, TreeStore } from './TreeStore';

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

  onMounted(() => {
    treeStore.updateItem({ id: 5, parent: 8, label: 'Айтем 5' });
    console.log(treeStore.getAll());
  });
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit
    <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to
    read the documentation
  </p>
</template>

<style scoped></style>
