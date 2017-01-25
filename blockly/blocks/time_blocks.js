Blockly.Blocks['seconds_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".seconds");
    this.setOutput(true, ["seconds"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".minutes");
    this.setOutput(true, ["minutes"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".hours");
    this.setOutput(true, ["hours"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['days_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".days");
    this.setOutput(true, ["days"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['seconds_to_minutes'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
    this.appendDummyInput()
        .appendField(".seconds.to_minutes");
    this.setOutput(true, "minutes");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minutes_to_hours'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
    this.appendDummyInput()
        .appendField(".minutes.to_hours");
    this.setOutput(true, "hours");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['hours_to_days'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
    this.appendDummyInput()
        .appendField(".hours.to_days");
    this.setOutput(true, "days");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_seconds'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("seconds")
    this.appendDummyInput()
        .appendField(".seconds.remaining_after_removal_of_minutes");
    this.setOutput(true, "seconds");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_minutes'] = {
  init: function() {
    this.appendValueInput("MINUTES")
        .setCheck("minutes")
    this.appendDummyInput()
        .appendField(".minutes.remaining_after_removal_of_hours");
    this.setOutput(true, "minutes");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['remaining_hours'] = {
  init: function() {
    this.appendValueInput("HOURS")
        .setCheck("hours")
    this.appendDummyInput()
        .appendField(".hours.remaining_after_removal_of_days");
    this.setOutput(true, "hours");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.Blocks['time_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["seconds", "minutes", "hours", "days"]);
    this.setColour(200);
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
*/
// CURRENCY

Blockly.Blocks['pennies_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".pennies");
    this.setOutput(true, ["pennies"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nickels_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".nickels");
    this.setOutput(true, ["nickels"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['quarters_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".quarters");
    this.setOutput(true, ["quarters"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dollars_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM")
        .appendField(".dollars");
    this.setOutput(true, ["dollars"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pennies_to_nickels'] = {
  init: function() {
    this.appendValueInput("PENNIES")
        .setCheck("pennies")
    this.appendDummyInput()
        .appendField(".pennies.to_nickels");
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
    this.appendDummyInput()
        .appendField(".nickels.to_quarters");
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
    this.appendDummyInput()
        .appendField(".quarters.to_dollars");
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
    this.appendDummyInput()
        .appendField(".pennies.remaining_after_removal_of_nickels");
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
    this.appendDummyInput()
        .appendField(".nickels.remaining_after_removal_of_quarters");
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
    this.appendDummyInput()
        .appendField(".quarters.remaining_after_removal_of_dollars");
    this.setOutput(true, "quarters");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

/*Blockly.Blocks['pennies_variable_set'] = {
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
};*/

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
        .setCheck(["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(".units.to_units_with_conversion_factor(");
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
    this.appendValueInput("FACTOR")
        .setCheck(["Number", "input_cell"])
        .appendField(".units.remaining_after_removal_of_units_of(");
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
        //.appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(".get_before_text(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('from text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['after_substring'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        //.appendField("from_text(");
    this.appendValueInput("SUB")
        .setCheck("String")
        .appendField(".get_after_text(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('from text');
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

Blockly.Blocks['function_getself'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("self");
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['class_def'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("class")
        .appendField(new Blockly.FieldTextInput("class_name"), "NAME");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['function_defzeroinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(290);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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

Blockly.Blocks['function_callzeroinputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("function_name"), "NAME");
        //.appendField("()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    // Below is for consistency with <field name = "...">value</field>
    //container.setAttribute('NAME', 'name');
    //container.innerText = this.getFieldValue('NAME');
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
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
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    // Below is for consistency with <field name = "...">value</field>
    //container.setAttribute('NAME', 'name');
    //container.innerText = this.getFieldValue('NAME');
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
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
    container.setAttribute('NAME', this.getFieldValue('NAME'));
    //alert(container.getAttribute('name'));
    return container;
  },
  domToMutation: function(xmlElement) {
    //alert(this.getField
    //alert("NAME: " + xmlElement.getAttribute('name'));
    //alert("MY NAME IS: " + this.setFieldValue('NAME'));
    this.setFieldValue(xmlElement.getAttribute('NAME'), 'NAME');
  }
};

Blockly.Blocks['string_concatenate'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 + %2",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "B",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": 160,
      "helpUrl": ""
    });
  }
};


Blockly.Blocks['math_number_general'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_number_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
            [[Blockly.Msg.MATH_ADDITION_SYMBOL, '+'],
             [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, '-'],
             [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, '*'],
             [Blockly.Msg.MATH_DIVISION_SYMBOL, '/'],
             [Blockly.Msg.MATH_POWER_SYMBOL, '**']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['math_number_round'] = {
  init: function() {
    this.jsonInit({
      "type": "math_number_round",
      "message0": "%1.%2",
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, 'round'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, 'round_up'],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, 'round_down']
          ]
        },
      ],
      "output": ["Number", "input_cell", "seconds", "minutes", "hours", "days", "pennies", "nickels", "quarters", "dollars"],
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.MATH_ROUND_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_ROUND_HELPURL
    });
  }
};
