# Vue 3 + TypeScript + Vite
在 Vue 3 中使用 TypeScript、Pinia、Vite 和 Vue Router 的代码组织结构可以按以下方式安排：
```javascript
- src
  - components // 组件
    - MyComponent.vue
    - ...
  - plugins // 插件
    - myPlugin.ts
    - ...
  - router // 路由相关
    - index.ts
    - routes.ts
    - ...
  - store // Pinia 状态管理相关
    - modules // 模块
      - auth.ts
      - cart.ts
      - ...
    - index.ts
  - utils // 工具函数
    - http.ts
    - ...
  - views // 页面
    - Home.vue
    - About.vue
    - ...
  - App.vue // 根组件
  - main.ts // 入口文件
```
在这个结构中，src/components 目录包含所有的组件，src/plugins 目录包含所有的插件，src/router 目录包含所有的路由相关代码，src/store 目录包含所有的状态管理相关代码，src/utils 目录包含所有的工具函数，src/views 目录包含所有的页面组件。

在 src/store 目录中，modules 目录包含所有的状态管理模块，例如 auth 模块、cart 模块等。index.ts 文件是 Pinia 的根实例的创建和导出的地方。

在 src/router 目录中，index.ts 文件是 Vue Router 的创建和导出的地方，routes.ts 文件包含所有的路由定义。

在 src/utils 目录中，http.ts 文件可以包含所有的 HTTP 请求相关的代码，例如 Axios 实例的创建和导出。

在 src/views 目录中，每个文件都是一个页面组件，例如 Home.vue、About.vue 等。

在 src/main.ts 文件中，创建 Vue 应用实例并将其挂载到 DOM 中。

在 src/App.vue 文件中，定义 Vue 应用的根组件。


在 Vue 3 中使用 TypeScript 和 echarts 定义 hook 可以如下实现：
```ts
import { ref, watchEffect } from "vue";
import * as echarts from "echarts";

interface ChartOption {
  title?: echarts.EChartOption.Title;
  xAxis?: echarts.EChartOption.XAxis[];
  yAxis?: echarts.EChartOption.YAxis[];
  series?: echarts.EChartOption.Series[];
}

export function useECharts(
  el: HTMLElement | null,
  option: ChartOption,
  theme?: string
) {
  const chartInstance = ref<echarts.ECharts>();

  watchEffect(() => {
    if (el) {
      chartInstance.value = echarts.init(el, theme);
      chartInstance.value.setOption(option);
    }
  });

  function resize() {
    chartInstance.value?.resize();
  }

  function dispose() {
    chartInstance.value?.dispose();
  }

  function setOption(newOption: ChartOption) {
    chartInstance.value?.setOption(newOption);
  }

  function switchTheme(newTheme?: string) {
    if (newTheme) {
      chartInstance.value?.dispose();
      chartInstance.value = echarts.init(el as HTMLElement, newTheme);
      chartInstance.value.setOption(option);
    }
  }

  function handleClick(handler: (params: any) => void) {
    chartInstance.value?.on("click", handler);
  }

  return {
    chartInstance,
    resize,
    dispose,
    setOption,
    switchTheme,
    handleClick,
  };
}

```
这个 useECharts hook 接收 3 个参数：

    el：渲染 echarts 图表的 DOM 元素
    option：echarts 图表的配置项
    theme：echarts 的主题（可选）

返回一个对象，包含以下函数和数据：

    chartInstance：ref 数据，echarts 实例对象
    resize：调整 echarts 图表大小的函数
    dispose：销毁 echarts 实例的函数
    setOption：重新设置 echarts 配置项的函数
    switchTheme：切换 echarts 主题的函数
    handleClick：echarts 点击事件的回调函数

其中，resize、dispose、setOption 和 switchTheme 函数的使用方式与 echarts 官方 API 相同。

handleClick 函数接收一个函数作为参数，该函数将在 echarts 点击事件触发时被调用，函数的参数是点击事件的参数。例如：
```ts
const { handleClick } = useECharts(el.value, option.value);

handleClick((params) => {
  console.log(params);
});

```