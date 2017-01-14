var textField = document.getElementById("text-code");

function createText(xmlDoc, root, attribute) {
    // attribute is only used for mutations
    var blocks = getBlockObjects();
    var text = "";
  
    if(root && root.nodeName === "field") {
      text = root.innerText;
    }
    
    else if(root.nodeName === "mutation" && attribute && root.getAttribute) {
      text = root.getAttribute(attribute);
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
                      var attr = child.children[j].getAttribute("name").toLowerCase();
                      if(nodeName && attr === nodeName.toLowerCase()
                         || child.children[j].nodeName.toLowerCase() === "mutation" && child.children[j].getAttribute(nodeName.toLowerCase()) !== null) {
                        return createText(xmlDoc, child.children[j], nodeName.toLowerCase()) + addedChar;
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
  var code = Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace());
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
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);//alert(xmlText);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlText, "text/xml");
  textField.innerText = createText(xmlDoc, xmlDoc.querySelector("xml"));
  textField.innerText += "\n\n" + Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace());
  eval(Blockly.JavaScript.workspaceToCode(workspace || Blockly.getMainWorkspace()));
  var functionCallBlocks = workspace.getAllBlocks().filter(function(block) {
    return typeof block.type === "string" && block.type.indexOf("function_def") === 0;
  }).map(function(block) {
    var callBlock = goog.dom.createDom('block');
    callBlock.setAttribute('type', block.type.replace("def", "call"));
    var field = goog.dom.createDom('field', null, block.getFieldValue("NAME") + "(");
    field.setAttribute('name', 'NAME');
    callBlock.appendChild(field);
    return callBlock;
  });
  var functionCategories = Array.prototype.filter.call(document.getElementById('toolbox').children, function(category){ 
    return category.getAttribute("name") === "Function Calls"; 
  });

  functionCategories.forEach(function(category) {
    category.innerHTML = ""; // quick way to remove all function call blocks
    functionCallBlocks.forEach(function(block) {
      category.appendChild(block);
    });
  });
  workspace.updateToolbox(document.getElementById('toolbox'));
});