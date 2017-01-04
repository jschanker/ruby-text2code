var fs = require("fs");
var json_to_js_template_file_path = "../blockly/blocks/json_to_js_template.txt";
var block_json_file_path = "../blockly/blocks/time_blocks.json";

fs.readFile(json_to_js_template_file_path, "utf8", function(error, json_text) {
  fs.readFile(block_json_file_path, "utf8", function(error, json) {
    var blocks = JSON.parse(json);
    var outputjs = blocks.map(function(block) {
      return json_text.replace(/{{([\$|\w]+)}}/g, function(match, variable) {
        //return variable.charAt(0) === "$" ? JSON.stringify(block).split(",").join(",\n      ") : block[variable];
        return variable.charAt(0) === "$" ? JSON.stringify(block) : block[variable];
      });
    }).join("\n\n");
    
    if(process.argv[2]) {
      fs.writeFile(process.argv[2], outputjs, function(err) {
        if(err) {
          console.log("Error writing to file:", process.argv[2]);
        } else {
          console.log("Successfully wrote to file:", process.argv[2]);
        }
      });
    } else {
      console.log(outputjs);
    }
  });
});

