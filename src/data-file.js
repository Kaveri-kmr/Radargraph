 
    window.onload=function(){
var chartData = {
  "labels": ["Italy", "Germany", "Netherlands", "France", "Spain"],
  "datasets": [{
    "data": [65, 59, 80, 81, 56],
    "fill": false,
    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.5)", "rgba(255, 205, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(54, 162, 235, 0.5)"],
    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)"],
    "borderWidth": 1
  }]
};
for (var i in chartData.labels) {
   var lab = chartData.labels[i];
  var $img = $("<img/>").attr("id", lab).attr("src", "https://www.free-country-flags.com/countries/"+lab+"/1/tiny/"+lab+".png");
  $("#pics").append($img);
}
var originalBarController = Chart.controllers.bar;
Chart.controllers.bar = Chart.controllers.bar.extend({
  draw: function() {
    originalBarController.prototype.draw.call(this, arguments);
    drawFlags(this);
  }
});
function drawFlags(t) {
  var chartInstance = t.chart;
  var dataset = chartInstance.config.data.datasets[0];
  var meta = chartInstance.controller.getDatasetMeta(0);
  var y0 = chartInstance.scales.y0.top+chartInstance.scales.y0.height;
  ctx.save();
  meta.data.forEach(function(bar, index) {
    var lab = bar._model.label;
    var img = document.getElementById(lab);
    ctx.drawImage(img,bar._model.x-10,y0-6,20,12);
    ctx.stroke();
  });
  ctx.restore();
}
var ctx = document.getElementById("myChart").getContext("2d");
var myBar = new Chart(ctx, {
  "type": "bar",
  "data": chartData,
  "options": {
     legend: { display: false },
    "scales": {
      "yAxes": [{
         id: "y0",
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
});
    }