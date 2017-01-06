function getBlockObjects() {
  var blocks = {};

    blocks['seconds_to_minutes'] = {"type":"seconds_to_minutes","message0":"seconds_to_minutes( %1 )","args0":[{"type":"input_value","name":"SECONDS","check":"seconds"}],"output":"minutes","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['minutes_to_hours'] = {"type":"minutes_to_hours","message0":"minutes_to_hours( %1 )","args0":[{"type":"input_value","name":"MINUTES","check":"minutes"}],"output":"hours","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['hours_to_days'] = {"type":"hours_to_days","message0":"hours_to_days( %1 )","args0":[{"type":"input_value","name":"HOURS","check":"hours"}],"output":"days","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_seconds'] = {"type":"remaining_seconds","message0":"remaining_seconds_after_minutes_removed( %1 )","args0":[{"type":"input_value","name":"SECONDS","check":"seconds"}],"output":"seconds","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_minutes'] = {"type":"remaining_minutes","message0":"remaining_minutes_after_hours_removed( %1 )","args0":[{"type":"input_value","name":"MINUTES","check":"minutes"}],"output":"minutes","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_hours'] = {"type":"remaining_hours","message0":"remaining_hours_after_days_removed( %1 )","args0":[{"type":"input_value","name":"HOURS","check":"hours"}],"output":"hours","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['time_number'] = {"type":"time_number","message0":"%1","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["seconds","minutes","hours","days"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['seconds_variable_set'] = {"type":"seconds_variable_set","message0":"set %1 to %2 .seconds","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"seconds"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['minutes_variable_set'] = {"type":"minutes_variable_set","message0":"set %1 to %2 .minutes","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"minutes"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['hours_variable_set'] = {"type":"hours_variable_set","message0":"set %1 to %2 .hours","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"hours"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['days_variable_set'] = {"type":"days_variable_set","message0":"set %1 to %2 .days","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"days"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['variables_get'] = {"type": "variables_get","message0": "%1","args0": [{"type": "field_variable","name": "VAR","variable": "item"}],"output": null,"colour": 330,"tooltip": "","helpUrl": "http://www.example.com/"};

  return blocks;
}