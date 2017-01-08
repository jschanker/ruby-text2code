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
