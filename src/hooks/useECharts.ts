import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

interface ChartData {
  chart: echarts.ECharts | null;
  option: echarts.EChartsOption;
}

export default function useECharts(
  chartRef: any,
  option: echarts.EChartsOption,
  theme: string
): ChartData {
  const chart = ref<echarts.ECharts | null>(null);

  const initChart = () => {
    if (!chart.value) {
      chart.value = echarts.init(chartRef.value, theme);
      chart.value.setOption(option);
    }
  };

  const setOption = (newOption: echarts.EChartsOption) => {
    if (chart.value) {
      chart.value.setOption(newOption);
    }
  };

  const resize = () => {
    if (chart.value) {
      chart.value.resize();
    }
  };

  const dispose = () => {
    if (chart.value) {
      chart.value.dispose();
      chart.value = null;
    }
  };

  const handleClick = (params: any) => {
    console.log(params);
  };

  onMounted(() => {
    initChart();
    chart.value?.on('click', handleClick);
    window.addEventListener('resize', resize);
  });

  onUnmounted(() => {
    dispose();
    window.removeEventListener('resize', resize);
  });

  return { chart, option };
}
