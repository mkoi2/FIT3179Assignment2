var vg_1 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Temperature_Chart.JSON";
vegaEmbed("#Line_Chart", vg_1, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Emission_Charts";
vegaEmbed("#Choropleth_Map", vg_2, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Gantt_Chart.JSON";
vegaEmbed("#Gantt_Chart",vg_3, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Energy_Map.JSON";
vegaEmbed("#Proportional_Map", vg_4, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_Bar.JSON";
vegaEmbed("#Bar_Chart", vg_5, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


// var vg_3 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_generation_map.json";
// vegaEmbed("#map", vg_3).then(function(result) {
// // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);
