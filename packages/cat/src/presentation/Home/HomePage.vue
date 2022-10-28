<script setup lang="ts">
import { NGrid, NH1, NCard, NImage, NText, NGi } from 'naive-ui';
import { useCats } from '../../application/cat/catHook';

const { cats } = useCats();
</script>

<template>
  <div class="page">
    <n-h1 type="success" align-text> Some cool cats </n-h1>

    <n-grid x-gap="12" :cols="4" y-gap="12">
      <n-gi v-for="cat in cats">
        <n-card :title="cat.name" :style="{ height: '250px' }">
          <template #cover>
            <n-image :src="cat.image.url" object-fit="cover" />
          </template>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>
¡
<style scoped>
h1 {
  color: aliceblue;
  text-align: center;
}

.page {
  padding: 20px;
  color: white;
}
</style>
