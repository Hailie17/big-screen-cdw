import * as echarts from "echarts";
import { onUnmounted } from "vue";

export default function useEcharts(divEl) {
  const echartInstance = echarts.init(divEl, null, { renderer: "svg" });

  onUnmounted(() => {
    echartInstance.dispose(); //销毁实例
  });

  function setOption(option) {
    echartInstance.setOption(option);
  }

  function resizeEchart() {
    echartInstance.resize();
  }

  return { echartInstance, setOption, resizeEchart };
}
