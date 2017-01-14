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

Blockly.Blocks['input_cell'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COL")
        .appendField(new Blockly.FieldNumber(1, 1, 15), "ROW");
    this.setOutput(true, ["Number", "seconds", "minutes", "hours", "days", 
                          "pennies", "nickels", "quarters", "dollars", "input_cell"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['print_in_result_cell'] = {
  init: function() {
    this.appendValueInput("EXP")
        .setCheck(null)
        .appendField("print");
    this.appendValueInput("CELL")
        .setCheck("result_cell")
        .appendField(".in result cell");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['result_cell_column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("R")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"]]), "COL");
    this.setOutput(true, "result_cell");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['prompt_for_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prompt_for_number_with_message(\"")
        .appendField(new Blockly.FieldTextInput("Enter number: "), "TEXT")
        .appendField("\")");
    this.setOutput(true, ["Number", "seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['units_convert'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"])
        .appendField("convert(");
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(").units_with_conversion_factor(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['units_remaining'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"])
        .appendField("remaining_from(");
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(").units_after_removal_of_units_of(");
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['before_substring'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(").get_before_text(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['after_substring'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(").get_after_text(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['variable_general_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("set(")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField(").to(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['function_defoneinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("variable_name"), "PARAM")
        .appendField(")");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), [this.getFieldValue('PARAM')], false];
  }
};

Blockly.Blocks['function_deftwoinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("variable1"), "PARAMA")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("variable2"), "PARAMB")
        .appendField(")");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), [this.getFieldValue('PARAMA'), this.getFieldValue('PARAMB')], false];
  }
};

Blockly.Blocks['function_calloneinput'] = {
  init: function() {
    this.appendDummyInput();
    this.appendValueInput("ARG1")
        .setCheck(null)
        //.appendField(new Blockly.FieldTextInput("default"), "FOO")
        .appendField(new Blockly.FieldLabel("("), "NAME");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getFieldValue('NAME'));
    //alert(container.getAttribute('name'));
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('name'), 'NAME');
  }
};

Blockly.Blocks['function_calltwoinputs'] = {
  init: function() {
    this.appendDummyInput();
    this.appendValueInput("ARG1")
        .setCheck(null)
        //.appendField(new Blockly.FieldTextInput("default"), "FOO")
        .appendField("(", "NAME");
    this.appendValueInput("ARG2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getFieldValue('NAME'));
    //alert(container.getAttribute('name'));
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('name'), 'NAME');
  }
};
