var fs = require("fs");
var block_json_file_path = "../blockly/blocks/blocks.json";
var get_blocks_function_template_file_path = "../get_blocks_function_template.txt";
var block_assignment_template_file_path = "../block_assignment_template.txt";

fs.readFile(block_json_file_path, "utf8", function(error, json) {
  fs.readFile(get_blocks_function_template_file_path, "utf8", function(error, function_text) {
    fs.readFile(block_assignment_template_file_path, "utf8", function(error, block_assignment) {
      var blocks = JSON.parse(json);
      var blockOutputJs = blocks.map(function(block) {
        return block_assignment.replace(/{{([\$|\w]+)}}/g, function(match, variable) {
          return variable.charAt(0) === "$" ? JSON.stringify(block) : block[variable];
        });
      }).join("\n");
      
      var outputjs = function_text.replace(/{{block-code}}/g, blockOutputJs);
               
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
});