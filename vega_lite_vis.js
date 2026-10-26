var vg_1 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Temperature_Chart.JSON";
vegaEmbed("#Line_Chart", vg_1, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Emission_Charts";
vegaEmbed("#Choropleth_Map", vg_2, {"actions":false,renderer: "svg"}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Gantt_Chart.JSON";
vegaEmbed("#Gantt_Chart",vg_3, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Energy_Map.JSON";
vegaEmbed("#Proportional_Map", vg_4, {"actions":false, renderer: "svg"}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_Bar.JSON";
vegaEmbed("#Bar_Chart", vg_5, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_Treatment.JSON";
vegaEmbed("#Mosaic_Chart", vg_6, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_7 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waffle_Chart.JSON";
vegaEmbed("#Waffle_Chart", vg_7, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_8 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Dot_Map.JSON";
vegaEmbed("#Dot_Map", vg_8, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_9 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Lollipop_Chart.JSON";
vegaEmbed("#Lollipop_Chart", vg_9, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_10 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Pie_Chart.JSON";
vegaEmbed("#Pie_Chart", vg_10, {"actions":false}).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// var vg_3 = "https://raw.githubusercontent.com/mkoi2/FIT3179Assignment2/main/Chart_files/Waste_generation_map.json";
// vegaEmbed("#map", vg_3).then(function(result) {
// // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);
