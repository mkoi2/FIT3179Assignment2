var vg_1 = "Temperature_Chart.json";
vegaEmbed("#Line_Chart", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "Waste_generation_map.json";
vegaEmbed("#Choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);