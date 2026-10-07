var vg_1 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Temperature_Chart.JSON";
vegaEmbed("#Line_Chart", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_generation_map.json";
vegaEmbed("#Choropleth_map", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);