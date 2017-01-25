function Unit(quantity, type) {
  this._quantity = quantity || 0;
  this._type = type;
}

Unit.prototype.toString = function() {
  return this._quantity + " " + this._type;
};

Unit.prototype.toInteger = function() {
  return Math.floor(this._quantity || 0);
};

function setToUnits(units, toType) {
  //alert(units._type);
  if(units instanceof Unit && toType != units._type) {
    alert("Error: Attempting to set variable to value in " + toType + " but its value has actual type " + units._type + " instead.");
  } else {
    return units instanceof Unit ? units : new Unit(units, toType);
  }
}

function convert(fromType, toType, conversionFactor, units) {
  if(units instanceof Unit && fromType != units._type) {
    alert("Error: Expected input to " + fromType + "_to_" + toType + " to have units in " + fromType + " but function received input with units in " + units._type + " instead.");
    throw new Error("Mismatched types in conversion.");
  } else {
    var quantity = units instanceof Unit ? units.toInteger() : units;
    return new Unit(Math.floor(quantity / conversionFactor), toType);
  }
}

function getRemainingAfterConvert(fromType, toType, conversionFactor, units) {
  if(units instanceof Unit && fromType != units._type) {
    alert("Error: Expected input to remaining_" + fromType + "_after_" + toType + "_removed to have units in " + fromType + " but function received input with units in " + units._type + " instead.");
    throw new Error("Mismatched types in conversion.");
  } else {
    var quantity = units instanceof Unit ? units.toInteger() : units;
    return new Unit(quantity % conversionFactor, fromType);
  }
}

function unitlessConvert(conversionFactor, units) {
  var int_units = units instanceof Unit ? units.toInteger() : Math.floor(units);
  return Math.floor(int_units / conversionFactor);
}

function unitlessRemainingAfterConvert(conversionFactor, units) {
  var int_units = units instanceof Unit ? units.toInteger() : Math.floor(units);
  return int_units % conversionFactor;
}

function beforeSubstring(str, substr) {
  var endIndex = str.indexOf(substr);
  return endIndex >= 0 ? str.substring(0, endIndex) : str;
}

function beforeLastSubstring(str, substr) {
  var endIndex = str.lastIndexOf(substr);
  return endIndex >= 0 ? str.substring(0, endIndex) : str;
}

function afterSubstring(str, substr) {
  return str.substring(str.indexOf(substr) + substr.length);
}

var NUM_OF_SECONDS_IN_MINUTES = 60;
var NUM_OF_MINUTES_IN_HOUR = 60;
var NUM_OF_HOURS_IN_DAY = 24;

var NUM_OF_PENNIES_IN_NICKEL = 5;
var NUM_OF_NICKELS_IN_QUARTER = 5;
var NUM_OF_QUARTERS_IN_DOLLAR = 4;

var seconds_to_minutes = convert.bind(null, "seconds", "minutes", NUM_OF_SECONDS_IN_MINUTES);
var minutes_to_hours = convert.bind(null, "minutes", "hours", NUM_OF_MINUTES_IN_HOUR);
var hours_to_days = convert.bind(null, "hours", "days", NUM_OF_HOURS_IN_DAY);
var remaining_seconds_after_minutes_removed = getRemainingAfterConvert.bind(null, "seconds", "minutes", NUM_OF_SECONDS_IN_MINUTES);
var remaining_minutes_after_hours_removed = getRemainingAfterConvert.bind(null, "minutes", "hours", NUM_OF_MINUTES_IN_HOUR);
var remaining_hours_after_days_removed = getRemainingAfterConvert.bind(null, "hours", "days", NUM_OF_HOURS_IN_DAY);

var pennies_to_nickels = convert.bind(null, "pennies", "nickels", NUM_OF_PENNIES_IN_NICKEL);
var nickels_to_quarters = convert.bind(null, "nickels", "quarters", NUM_OF_NICKELS_IN_QUARTER);
var quarters_to_dollars = convert.bind(null, "quarters", "dollars", NUM_OF_QUARTERS_IN_DOLLAR);
var remaining_pennies_after_nickels_removed = getRemainingAfterConvert.bind(null, "pennies", "nickels", NUM_OF_PENNIES_IN_NICKEL);
var remaining_nickels_after_quarters_removed = getRemainingAfterConvert.bind(null, "nickels", "quarters", NUM_OF_NICKELS_IN_QUARTER);
var remaining_quarters_after_dollars_removed = getRemainingAfterConvert.bind(null, "quarters", "dollars", NUM_OF_QUARTERS_IN_DOLLAR);

Blockly.JavaScript['seconds_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "seconds")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['minutes_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "minutes")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['hours_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "hours")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['days_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "days");\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['seconds_to_minutes'] = function(block) {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'seconds_to_minutes(' + value_seconds + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['minutes_to_hours'] = function(block) {
  var value_minutes = Blockly.JavaScript.valueToCode(block, 'MINUTES', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'minutes_to_hours(' + value_minutes + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['hours_to_days'] = function(block) {
  var value_hours = Blockly.JavaScript.valueToCode(block, 'HOURS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'hours_to_days(' + value_hours + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_seconds'] = function(block) {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_seconds_after_minutes_removed(' + value_seconds + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_minutes'] = function(block) {
  var value_minutes = Blockly.JavaScript.valueToCode(block, 'MINUTES', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_minutes_after_hours_removed(' + value_minutes + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_hours'] = function(block) {
  var value_hours = Blockly.JavaScript.valueToCode(block, 'HOURS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_hours_after_days_removed(' + value_hours + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['seconds_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "seconds")' + ';\n';
};

Blockly.JavaScript['minutes_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "minutes")' + ';\n';
};

Blockly.JavaScript['hours_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "hours")' + ';\n';
};

Blockly.JavaScript['days_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "days")' + ';\n';
};

//Blockly.JavaScript['days_variable_set'] = Blockly.JavaScript['hours_variable_set'] = Blockly.JavaScript['minutes_variable_set'] = Blockly.JavaScript['seconds_variable_set'];

Blockly.JavaScript['time_number'] = function(block) {
  var number_num = block.getFieldValue('NUM');
  // TODO: Assemble JavaScript into code variable.
  var code = parseInt(number_num);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// CURRENCY

Blockly.JavaScript['pennies_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "pennies")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['nickels_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "nickels")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['quarters_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "quarters")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['dollars_number'] = function(block) {
  var number_num = block.getFieldValue('NUM') || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setToUnits(' + parseInt(number_num) + ', "dollars")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['pennies_to_nickels'] = function(block) {
  var value_pennies = Blockly.JavaScript.valueToCode(block, 'PENNIES', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'pennies_to_nickels(' + value_pennies + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['nickels_to_quarters'] = function(block) {
  var value_nickels = Blockly.JavaScript.valueToCode(block, 'NICKELS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'nickels_to_quarters(' + value_nickels + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['quarters_to_dollars'] = function(block) {
  var value_quarters = Blockly.JavaScript.valueToCode(block, 'QUARTERS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'quarters_to_dollars(' + value_quarters + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_pennies'] = function(block) {
  var value_pennies = Blockly.JavaScript.valueToCode(block, 'PENNIES', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_pennies_after_nickels_removed(' + value_pennies + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_nickels'] = function(block) {
  var value_nickels = Blockly.JavaScript.valueToCode(block, 'NICKELS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_nickels_after_quarters_removed(' + value_nickels + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remaining_quarters'] = function(block) {
  var value_quarters = Blockly.JavaScript.valueToCode(block, 'QUARTERS', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'remaining_quarters_after_dollars_removed(' + value_quarters + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['pennies_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "pennies")' + ';\n';
};

Blockly.JavaScript['nickels_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "nickels")' + ';\n';
};

Blockly.JavaScript['quarters_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "quarters")' + ';\n';
};

Blockly.JavaScript['dollars_variable_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + 'setToUnits(' + argument0 + ', "dollars")' + ';\n';
};

Blockly.JavaScript['currency_number'] = function(block) {
  var number_num = block.getFieldValue('NUM');
  // TODO: Assemble JavaScript into code variable.
  var code = parseInt(number_num);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// General print units function

Blockly.JavaScript['units_print'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var msg = msg instanceof Unit ? msg + " " + msg._units : msg;
  return 'window.alert(' + msg + ');\n';
};

Blockly.JavaScript['print_in_result_cell'] = function(block) {
  var value_exp = Blockly.JavaScript.valueToCode(block, 'EXP', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cell = Blockly.JavaScript.valueToCode(block, 'CELL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(document.getElementById(value_cell)) {
    code = 'document.getElementById("' + value_cell + '").innerText = ' + value_exp + ';\n';
  } else {
    code = 'window.alert(' + value_exp + ');\n';
  }
  
  return code;
};

Blockly.JavaScript['result_cell_column'] = function(block) {
  var dropdown_col = block.getFieldValue('COL');
  // TODO: Assemble JavaScript into code variable.
  var code = "R" + dropdown_col;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_cell'] = function(block) {
  var dropdown_col = block.getFieldValue('COL');
  var number_row = block.getFieldValue('ROW');
  // TODO: Assemble JavaScript into code variable.
  var cell = dropdown_col + number_row;
  var cell_val = document.getElementById(cell);
  var code;
  
  if(cell_val) {
    code = parseInt(cell_val.value) || 0;
  } else {
    code = parseInt(prompt("Enter number", 0)) || 0;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['prompt_for_number'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'parseInt(window.prompt("' + text_text + '"))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['units_convert'] = function(block) {
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_factor = Blockly.JavaScript.valueToCode(block, 'FACTOR', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  // TODO: Assemble JavaScript into code variable.
  var code = 'unitlessConvert(' + value_factor + ',' + value_num + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['units_remaining'] = function(block) {
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_factor = Blockly.JavaScript.valueToCode(block, 'FACTOR', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  // TODO: Assemble JavaScript into code variable.
  var code = 'unitlessRemainingAfterConvert(' + value_factor + ',' + value_num + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['before_substring'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  var value_sub = Blockly.JavaScript.valueToCode(block, 'SUB', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  // TODO: Assemble JavaScript into code variable.
  var code = 'beforeSubstring(' + value_text + ',' + value_sub + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['after_substring'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  var value_sub = Blockly.JavaScript.valueToCode(block, 'SUB', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
  // TODO: Assemble JavaScript into code variable.
  var code = 'afterSubstring(' + value_text + ',' + value_sub + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['variable_general_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript['function_defzeroinputs'] = function(block) {
  // Define a procedure with an implicit return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var finalBlock = block.getChildren() && block.getChildren()[0];
  var b;
  
  while(finalBlock && (b = finalBlock.getNextBlock())) {
    finalBlock = b;
  }
  
  //console.log(block.getChildren());
  
  if(finalBlock) {
    var finalBlockJS = Blockly.JavaScript.blockToCode(finalBlock);
    var branch = beforeSubstring(Blockly.JavaScript.statementToCode(block, 'STACK'), finalBlockJS);
    //alert(finalBlockJS);
  
    if (Blockly.JavaScript.STATEMENT_PREFIX) {
      branch = Blockly.JavaScript.prefixLines(
          Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
          '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
    }
    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
      branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
          '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
        Blockly.JavaScript.ORDER_NONE) || beforeLastSubstring(finalBlockJS.trim(), ";");
    if (returnValue) {
      returnValue = '  return (' + returnValue + ');\n';
    }
  } else {
      var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
      var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
          Blockly.JavaScript.ORDER_NONE);
      if (returnValue) {
        returnValue = '  return (' + returnValue + ');\n';
      }
  }
  
  var code = 'function ' + funcName + '() {\n' +
      branch + returnValue + '}';

  code = Blockly.JavaScript.scrub_(block, code);
  
  return code; // added
  
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};


Blockly.JavaScript['function_defoneinput'] = function(block) {
  // Define a procedure with an implicit return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var finalBlock = block.getChildren() && block.getChildren()[0];
  var b;
  
  while(finalBlock && (b = finalBlock.getNextBlock())) {
    finalBlock = b;
  }
  
  //console.log(block.getChildren());
  
  if(finalBlock) {
    var finalBlockJS = Blockly.JavaScript.blockToCode(finalBlock);
    var branch = beforeSubstring(Blockly.JavaScript.statementToCode(block, 'STACK'), finalBlockJS);
    //alert(finalBlockJS);
  
    if (Blockly.JavaScript.STATEMENT_PREFIX) {
      branch = Blockly.JavaScript.prefixLines(
          Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
          '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
    }
    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
      branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
          '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
        Blockly.JavaScript.ORDER_NONE) || beforeLastSubstring(finalBlockJS.trim(), ";");
    if (returnValue) {
      returnValue = '  return (' + returnValue + ');\n';
    }
  } else {
      var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
      var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
          Blockly.JavaScript.ORDER_NONE);
      if (returnValue) {
        returnValue = '  return (' + returnValue + ');\n';
      }
  }
  
  var args = [];
  for (var i = 0; i < 1; i++) {
    args[i] = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PARAM'),
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';

  code = Blockly.JavaScript.scrub_(block, code);
  
  return code; // added
  
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};

Blockly.JavaScript['class_def'] = function(block) {
  var text_name = block.getFieldValue('NAME') || "Generic";
  text_name = text_name[0].toUpperCase() + text_name.substring(1).toLowerCase();
  var statements_stack = Blockly.JavaScript.statementToCode(block, 'STACK');
  alert(statements_stack);
  var code = statements_stack.replace("/function\s*([^\s(]+)\(([^\)]*)\)/g", function(match, funcName, parmList) {
    return text_name + ".prototype." + funcName + "= function(" + paramList + ") {\n";
  }) || (text_name + ".prototype.foo = function() {\n");
  var code = code + "\n};";
  alert(code);
  // TODO: Assemble JavaScript into code variable.
  //var code = text_name[0].toUpperCase() + text_name.substring(1).toLowerCase() + ".prototype." + '=function()};\n';
  return code;
};

Blockly.JavaScript['function_getself'] = function(block) {
  return ["this", Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['function_deftwoinputs'] = function(block) {
  // Define a procedure with an implicit return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var finalBlock = block.getChildren() && block.getChildren()[0];
  var b;
  
  while(finalBlock && (b = finalBlock.getNextBlock())) {
    finalBlock = b;
  }
  
  //console.log(block.getChildren());
  
  if(finalBlock) {
    var finalBlockJS = Blockly.JavaScript.blockToCode(finalBlock);
    var branch = beforeSubstring(Blockly.JavaScript.statementToCode(block, 'STACK'), finalBlockJS);
    //alert(finalBlockJS);
  
    if (Blockly.JavaScript.STATEMENT_PREFIX) {
      branch = Blockly.JavaScript.prefixLines(
          Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
          '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
    }
    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
      branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
          '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
        Blockly.JavaScript.ORDER_NONE) || beforeLastSubstring(finalBlockJS.trim(), ";");
    if (returnValue) {
      returnValue = '  return (' + returnValue + ');\n';
    }
  } else {
      var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
      var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
          Blockly.JavaScript.ORDER_NONE);
      if (returnValue) {
        returnValue = '  return (' + returnValue + ');\n';
      }
  }
  
  var args = [];
  for (var i = 0; i < 2; i++) {
    args[i] = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PARAM' + (i === 0 ? 'A' : 'B')),
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  
  return code; // added
  
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};

Blockly.JavaScript['function_callzeroinputs'] = function(block) {
  var func_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = func_name + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['function_calloneinput'] = function(block) {
  var func_name = block.getFieldValue('NAME');
  var value_arg1 = Blockly.JavaScript.valueToCode(block, 'ARG1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = func_name + value_arg1 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['function_calltwoinputs'] = function(block) {
  var func_name = block.getFieldValue('NAME');
  var value_arg1 = Blockly.JavaScript.valueToCode(block, 'ARG1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arg2 = Blockly.JavaScript.valueToCode(block, 'ARG2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = func_name + value_arg1 + ',' + value_arg2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_number_general'] = function(block) {
  var number_num = block.getFieldValue('NUM');
  // TODO: Assemble JavaScript into code variable.
  var code = parseInt(number_num);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['math_number_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_UNARY_NEGATION) || '0';
    if (arg[0] == '-') {
      // --3 is not legal in JS.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.JavaScript.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_DIVISION) || '0';
  } else {
    arg = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'Math.abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'Math.sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'Math.log(' + arg + ')';
      break;
    case 'EXP':
      code = 'Math.exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'Math.pow(10,' + arg + ')';
      break;
    case 'round':
      code = 'Math.round(' + arg + ')';
      break;
    case 'round_up':
      code = 'Math.ceil(' + arg + ')';
      break;
    case 'round_down':
      code = 'Math.floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'Math.sin(' + arg + ' / 180 * Math.PI)';
      break;
    case 'COS':
      code = 'Math.cos(' + arg + ' / 180 * Math.PI)';
      break;
    case 'TAN':
      code = 'Math.tan(' + arg + ' / 180 * Math.PI)';
      break;
  }
  if (code) {
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'Math.log(' + arg + ') / Math.log(10)';
      break;
    case 'ASIN':
      code = 'Math.asin(' + arg + ') / Math.PI * 180';
      break;
    case 'ACOS':
      code = 'Math.acos(' + arg + ') / Math.PI * 180';
      break;
    case 'ATAN':
      code = 'Math.atan(' + arg + ') / Math.PI * 180';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.JavaScript.ORDER_DIVISION];
};

Blockly.JavaScript['string_concatenate'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var code;
  code = argument0 + " + " + argument1;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript['string_length'] = function(block) {
  // String or array length.
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [text + '.length', Blockly.JavaScript.ORDER_MEMBER];
};


//Blockly.JavaScript.quote_

Blockly.JavaScript['math_number_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    '+': [' + ', Blockly.JavaScript.ORDER_ADDITION],
    '-': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
    '*': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
    '/': [' / ', Blockly.JavaScript.ORDER_DIVISION],
    '**': [null, Blockly.JavaScript.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in JavaScript requires a special case since it has no operator.
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

// Rounding functions have a single operand.
Blockly.JavaScript['math_number_round'] = Blockly.JavaScript['math_number_single'];
// Trigonometry functions have a single operand.
Blockly.JavaScript['math_number_trig'] = Blockly.JavaScript['math_number_single'];

//alert(Blockly.Msg.VARIABLES_SET);
//Blockly.Blocks['variables_set'].msg0 = "%1 = %2";
Blockly.Msg.VARIABLES_SET = "%1 = %2";
Blockly.Msg.MATH_POWER_SYMBOL = "**";
Blockly.Msg.MATH_DIVISION_SYMBOL = "/";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "round_up";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "round_down";
//alert(Blockly.Msg.VARIABLES_SET);