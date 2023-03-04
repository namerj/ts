<template>
  <el-sub-menu :index="index" v-if="menu.children && menu.children.length > 0">
    <template #title>
      <i :class="menu.icon"></i>
      <span>{{ menu.title }}</span>
    </template>
    <menu-item
      v-for="submenu in menu.children"
      :key="submenu.path"
      :menu="submenu"
      :index="submenu.path"
    />
  </el-sub-menu>
  <el-menu-item :index="index" v-else>
    <i :class="menu.icon"></i>
    <span>{{ menu.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { MenuItemType } from '@/types/menuitem';

const props = defineProps({
  menu: {
    type: Object as () => MenuItemType,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
});
</script>
