const data = require("./material-theme/data/tokens.json");
const fs = require("fs");
const raw_data = data.entities;
let colors_light = {};
let colors_dark = {};
let colorName = "";

raw_data.forEach((item) => {
  if (item.category_id === "sys.color.light") {
    //removing md.sys.color from item.name
    colorName = item.name.substring(13);
    colors_light[colorName] = item.value;
  }
});

raw_data.forEach((item) => {
  if (item.category_id === "sys.color.dark") {
    colorName = item.name.substring(13);
    colors_dark[colorName] = item.value;
  }
});

let colors_export = { ...colors_light, ...colors_dark };
let colors_export_string = JSON.stringify(colors_export, null, 4);

fs.writeFile("colors.json", colors_export_string, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("The file has been saved!");
});

module.exports = { colors_export };
