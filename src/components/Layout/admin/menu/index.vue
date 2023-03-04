<template>
  <el-menu
    :default-active="defaultActive"
    class="menu"
    mode="horizontal"
    :unique-opened="true"
    router
  >
    <menu-item
      v-for="menu in menuList"
      :key="menu.path"
      :menu="menu"
      :index="menu.path"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { MenuItemType } from '@/types/menuitem';
import MenuItem from './MenuItem.vue';

const props = defineProps({
  menuList: {
    type: Array as () => MenuItemType[],
    required: true,
  },
});

const defaultActive = ref(useRoute().path);
</script>
