var textField = document.getElementById("text-code");

function getBlockObjects() {
  // TODO: Replace with generated JS file
  
  var blocks = {};
  blocks['num_of_minutes'] = {"type":"num_of_minutes","message0":"number of minutes in  %1 .seconds","args0":[{"type":"input_value","name":"SECONDS"}],"inputsInline":true,"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  
  blocks['num_remaining_seconds_after_minutes'] = {"type":"num_remaining_seconds_after_minutes","message0":"number of remaining seconds from %1 .seconds after minutes removed","args0":[{"type":"input_value","name":"SECONDS","check":"Number"}],"inputsInline":true,"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};

  blocks['num_of_hours_in_minutes'] = {"type":"num_of_hours_in_minutes","message0":"number of hours in %1 .minutes","args0":[{"type":"input_value","name":"MINUTES","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};

  blocks['num_of_days'] = {"type":"num_of_days","message0":"number of days in %1 .hours","args0":[{"type":"input_value","name":"HOURS","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};

  blocks['num_of_remaining_minutes_after_hours_removed'] = {"type":"num_of_remaining_minutes_after_hours_removed","message0":"number of remaining minutes from %1 .minutes after hours removed","args0":[{"type":"input_value","name":"MINUTES","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};

  blocks['num_of_remaining_hours_after_days'] = {"type":"num_of_remaining_hours_after_days","message0":"number of remaining hours from %1 .hours after days removed","args0":[{"type":"input_value","name":"HOURS","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};

  return blocks;
}

function createText(xmlDoc, root) {
    var blocks = getBlockObjects();
    var text = "";
    
    for(var i = 0; i < root.children.length; i++) {
        var child = root.children[i];
        if(child.nodeName === "block") {
            var block = blocks[child.getAttribute("type")];
            var breakPointChars = {};
            var charOfLastInput = "";
            if(block && typeof block.message0 === "string") {
                if(block.args0 && typeof block.args0.map === "function") {
                    // assert block.args0 is an array
                    for(var j = block.args0.length-1; j > 0; j--) {
                      if(block.args0[j].type.indexOf("input") === 0) {
                        breakPointChars[j+1] = charOfLastInput;
                      }
                      if(block.args0[j].type === "input_dummy" || block.args0[j].type == "input_value") {
                        charOfLastInput = "";
                      }
                      else if(block.args0[j].type === "input_statement") {
                        charOfLastInput = "\n";
                      }
                    }
                }
                text += block.message0.replace(/\%([\d]+)/g, function(match, num) {
                  if(num >= 1 && block.args0) {
                    var addedChar = "";
                    if(num in breakPointChars) {
                        addedChar = breakPointChars[num];
                    }
                    var nodeName = block.args0[num-1].name;
                    for(var j = 0; j < child.children.length; j++) {
                      if(nodeName && child.children[j].getAttribute("name") === nodeName) {
                        return createText(xmlDoc, child.children[j]) + addedChar;
                      }
                    }
                  }
                  
                  return addedChar; // not found
                  
                });
            }
        }
        
        for(var j = 0; j < child.children.length; j++) {
            if(child.children[j].nodeName === "next") {
                text += "\n" + createText(xmlDoc, child.children[j]);
            }
        }
    }
    
    return text;
}

document.getElementById("convert-to-ruby-text-btn").addEventListener("click", function() {
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlText, "text/xml");
  textField.innerText = createText(xmlDoc, xmlDoc.querySelector("xml"));
});