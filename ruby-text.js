var textField = document.getElementById("text-code");

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