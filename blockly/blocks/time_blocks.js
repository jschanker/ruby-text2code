Blockly.Blocks['seconds_to_minutes'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
        .appendField("seconds_to_minutes(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "minutes");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_to_hours'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
        .appendField("minutes_to_hours(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "hours");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_to_days'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
        .appendField("hours_to_days(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "days");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_seconds'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
        .appendField("remaining_seconds_after_minutes_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "seconds");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_minutes'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
        .appendField("remaining_minutes_after_hours_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "minutes");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_hours'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
        .appendField("remaining_hours_after_days_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "hours");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['time_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["seconds", "minutes", "hours", "days"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['seconds_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("seconds")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("minutes")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".minutes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("hours")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".hours");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['days_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("days")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".days");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// CURRENCY

Blockly.Blocks['pennies_to_nickels'] = {
  init: function() {
    this.appendValueInput("PENNIES")
        .setCheck("pennies")
        .appendField("pennies_to_nickels(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "nickels");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nickels_to_quarters'] = {
  init: function() {
    this.appendValueInput("NICKELS")
        .setCheck("nickels")
        .appendField("nickels_to_quarters(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "quarters");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['quarters_to_dollars'] = {
  init: function() {
    this.appendValueInput("QUARTERS")
        .setCheck("quarters")
        .appendField("quarters_to_dollars(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "dollars");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_pennies'] = {
  init: function() {
    this.appendValueInput("PENNIES")
        .setCheck("pennies")
        .appendField("remaining_pennies_after_nickels_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "pennies");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_nickels'] = {
  init: function() {
    this.appendValueInput("NICKELS")
        .setCheck("nickels")
        .appendField("remaining_nickels_after_quarters_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "nickels");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['remaining_quarters'] = {
  init: function() {
    this.appendValueInput("QUARTERS")
        .setCheck("quarters")
        .appendField("remaining_quarters_after_dollars_removed(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, "quarters");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pennies_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("pennies")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".pennies");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['nickels_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("nickels")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".nickels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['quarters_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("quarters")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".quarters");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dollars_variable_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("dollars")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendDummyInput()
        .appendField(".dollars");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['currency_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["pennies", "nickels", "quarters", "dollars"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['units_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};