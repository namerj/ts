<template>
  <el-container style="height: 100%">
    <el-header>
      <Menu :menuList="menuList"></Menu>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import { MenuItemType } from '@/types/menuitem';
import Menu from './menu/index.vue';

// 递归获取所有路由配置
function getRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = [];
  for (const route of routes) {
    result.push(route);
    if (route.children) {
      result.push(...getRoutes(route.children));
    }
  }
  return result;
}

// 获取所有路由配置
function getAllRoutes(): RouteRecordRaw[] {
  const router = useRouter();
  const routes = router.getRoutes();
  console.log(routes, '0000');
  
  return getRoutes(routes);
}
console.log(getAllRoutes(), '111');

const menuList: MenuItemType[] = [
  {
    title: '首页',
    path: '/home',
  },
  {
    title: 'echarts',
    path: '/admin/echarts',
    children: [
      {
        title: '柱状图',
        path: '/admin/echarts/bar',
      },
      {
        title: '折线图',
        path: '/admin/echarts/line',
      },
    ]
  },
  {
    title: 'typescript',
    path: '/admin/typescript'
  }
];
</script>
