Blockly.Blocks['num_of_minutes'] = {
  init: function() {
    this.jsonInit({"type":"num_of_minutes","message0":"number of minutes in  %1 .seconds","args0":[{"type":"input_value","name":"SECONDS"}],"inputsInline":true,"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};

Blockly.Blocks['num_remaining_seconds_after_minutes'] = {
  init: function() {
    this.jsonInit({"type":"num_remaining_seconds_after_minutes","message0":"number of remaining seconds from %1 .seconds after minutes removed","args0":[{"type":"input_value","name":"SECONDS","check":"Number"}],"inputsInline":true,"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};

Blockly.Blocks['num_of_hours_in_minutes'] = {
  init: function() {
    this.jsonInit({"type":"num_of_hours_in_minutes","message0":"number of hours in %1 .minutes","args0":[{"type":"input_value","name":"MINUTES","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};

Blockly.Blocks['num_of_days'] = {
  init: function() {
    this.jsonInit({"type":"num_of_days","message0":"number of days in %1 .hours","args0":[{"type":"input_value","name":"HOURS","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};

Blockly.Blocks['num_of_remaining_minutes_after_hours_removed'] = {
  init: function() {
    this.jsonInit({"type":"num_of_remaining_minutes_after_hours_removed","message0":"number of remaining minutes from %1 .minutes after hours removed","args0":[{"type":"input_value","name":"MINUTES","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};

Blockly.Blocks['num_of_remaining_hours_after_days'] = {
  init: function() {
    this.jsonInit({"type":"num_of_remaining_hours_after_days","message0":"number of remaining hours from %1 .hours after days removed","args0":[{"type":"input_value","name":"HOURS","check":"Number"}],"output":null,"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"});
  }
};