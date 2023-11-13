<script setup>
import PieChart from "@/components/pie-chart.vue";
import BarEcharts from "@/components/bar-echarts.vue";
import LineEcharts from "@/components/line-echarts.vue";
import RightBottomSvg from "@/components/right-bottom-svg.vue";
import CenterSvg from "@/components/center-svg.vue";
import { getPowerScreenData } from "@/services";
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
} from "./config/home-data";
import { ref } from "vue";

let chargingPile = ref(chargingPileData);
let processMonitoring = ref(processMonitoringData);
let chargingStatistics = ref(chargingStatisticsData);
let exceptionMonitoring = ref(exceptionMonitoringData);

getPowerScreenData().then((res) => {
  chargingPile.value = res.data.chargingPile.data;
  processMonitoring.value = res.data.processMonitoring.data;
  chargingStatistics.value = res.data.chargingStatistics.data;
  exceptionMonitoring.value = res.data.exceptionMonitoring.data;
});
</script>

<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pie-chart :echartDatas="chargingPile" />
    </div>
    <div class="left-bottom">
      <line-echarts :echartDatas="processMonitoring" />
    </div>

    <div class="right-top">
      <bar-echarts />
    </div>
    <div class="right-center">
      <bar-echarts :echartDatas="chargingStatistics" />
    </div>
    <div class="right-bottom">
      <right-bottom-svg :dots="exceptionMonitoring"></right-bottom-svg>
    </div>

    <div class="center">
      <center-svg />
    </div>
    <div class="bottom"></div>
  </main>
</template>

<style scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/bg.png);
}
.header {
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;
  background-image: url(@/assets/images/bg_header.svg);
}
.left-top {
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;
  background-image: url(@/assets/images/bg_left-top.svg);
}
.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;
  background-image: url(@/assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}
.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;
  background-image: url(@/assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;
  background-image: url(@/assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
}
.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  border: 5px solid pink;
}
.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(@/assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
