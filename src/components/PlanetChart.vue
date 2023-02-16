


 <script>

import Chart from 'chart.js';
import planetChartData from '../planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    ctx.height = 100;
    new Chart(ctx, planetChartData);
  }
}
</script>
<!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://unpkg.com/chart.js-plugin-labels-dv@3.0.5/dist/chartjs-plugin-labels.min.js"></script> -->
<template>
    <div>
      <canvas id="planet-chart"></canvas>
    </div>
  </template>
  
