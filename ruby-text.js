var textField = document.getElementById("text-code");

function createText(xmlDoc, root) {
    var blocks = getBlockObjects();
    var text = "";
    
    if(root && root.nodeName === "field") {
      text = root.innerText;
    }
    
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
            
            var hasStatementInput = block.args0 && block.args0.map(function(obj) {
              return obj.type;
            }).indexOf("input_statement") != -1;
            
            if(typeof block.nextStatement != "undefined" || hasStatementInput) {
                text += "\n";
            }
        }
        
        for(var j = 0; j < child.children.length; j++) {
            if(child.children[j].nodeName === "next") {
                //text += "\n" + createText(xmlDoc, child.children[j]);
                text += createText(xmlDoc, child.children[j]);
            }
        }
    }
    
    return text;
}

function runCodeAndTestFunctions() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode();
  try {
    eval(code);
  } catch(e) {
    if(e.toString().indexOf("Reference") != -1) {
      alert(e.toString() + "\nMake sure variables are defined before they're used.  Variables defined inside of the function will not be available outside of it.");
    } else {
      alert(e.toString());
    }
  }
}

document.getElementById("convert-to-ruby-text-btn").addEventListener("click", function() {
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);alert(xmlText);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlText, "text/xml");
  textField.innerText = createText(xmlDoc, xmlDoc.querySelector("xml"));
  textField.innerText += "\n\n" + Blockly.JavaScript.workspaceToCode();
  eval(Blockly.JavaScript.workspaceToCode());
  //alert(s);
});