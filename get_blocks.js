function getBlockObjects() {
  var blocks = {};

    blocks['seconds_to_minutes'] = {"type":"seconds_to_minutes","message0":"%1 .seconds.to_minutes","args0":[{"type":"input_value","name":"SECONDS","check":"seconds"}],"output":"minutes","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['minutes_to_hours'] = {"type":"minutes_to_hours","message0":"%1 .minutes.to_hours","args0":[{"type":"input_value","name":"MINUTES","check":"minutes"}],"output":"hours","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['hours_to_days'] = {"type":"hours_to_days","message0":"%1 .hours.to_days","args0":[{"type":"input_value","name":"HOURS","check":"hours"}],"output":"days","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_seconds'] = {"type":"remaining_seconds","message0":"%1 .seconds.remaining_after_removal_of_minutes","args0":[{"type":"input_value","name":"SECONDS","check":"seconds"}],"output":"seconds","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_minutes'] = {"type":"remaining_minutes","message0":"%1 .minutes.remaining_after_removal_of_hours","args0":[{"type":"input_value","name":"MINUTES","check":"minutes"}],"output":"minutes","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['remaining_hours'] = {"type":"remaining_hours","message0":"%1 .hours.remaining_after_removal_of_days","args0":[{"type":"input_value","name":"HOURS","check":"hours"}],"output":"hours","colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['time_number'] = {"type":"time_number","message0":"%1","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["seconds","minutes","hours","days"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['seconds_number'] = {"type":"seconds_number","message0":"%1 .seconds","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["seconds"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['minutes_number'] = {"type":"minutes_number","message0":"%1 .minutes","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["minutes"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['hours_number'] = {"type":"hours_number","message0":"%1 .hours","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["hours"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['days_number'] = {"type":"days_number","message0":"%1 .days","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["days"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['seconds_variable_set'] = {"type":"seconds_variable_set","message0":"set %1 to %2 .seconds","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"seconds"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['minutes_variable_set'] = {"type":"minutes_variable_set","message0":"set %1 to %2 .minutes","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"minutes"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['hours_variable_set'] = {"type":"hours_variable_set","message0":"set %1 to %2 .hours","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"hours"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['days_variable_set'] = {"type":"days_variable_set","message0":"set %1 to %2 .days","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"days"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['pennies_number'] = {"type":"pennies_number","message0":"%1 .pennies","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["pennies"],"colour":120,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['nickels_number'] = {"type":"nickels_number","message0":"%1 .nickels","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["nickels"],"colour":120,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['quarters_number'] = {"type":"quarters_number","message0":"%1 .quarters","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["quarters"],"colour":120,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['dollars_number'] = {"type":"dollars_number","message0":"%1 .dollars","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["dollars"],"colour":120,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['pennies_to_nickels'] = {"type":"pennies_to_nickels","message0":"%1 .pennies.to_nickels","args0":[{"type":"input_value","name":"PENNIES","check":"pennies"}],"output":"nickels","colour":120,"tooltip":"","helpUrl":""};
  blocks['nickels_to_quarters'] = {"type":"nickels_to_quarters","message0":"%1 .nickels.to_quarters","args0":[{"type":"input_value","name":"NICKELS","check":"nickels"}],"output":"quarters","colour":120,"tooltip":"","helpUrl":""};
  blocks['quarters_to_dollars'] = {"type":"quarters_to_dollars","message0":"%1 .quarters.to_dollars","args0":[{"type":"input_value","name":"QUARTERS","check":"quarters"}],"output":"dollars","colour":120,"tooltip":"","helpUrl":""};
  blocks['remaining_pennies'] = {"type":"remaining_pennies","message0":"%1 .pennies.remaining_after_removal_of_nickels","args0":[{"type":"input_value","name":"PENNIES","check":"pennies"}],"output":"pennies","colour":120,"tooltip":"","helpUrl":""};
  blocks['remaining_nickels'] = {"type":"remaining_nickels","message0":"%1 .nickels.remaining_after_removal_of_quarters","args0":[{"type":"input_value","name":"NICKELS","check":"nickels"}],"output":"nickels","colour":120,"tooltip":"","helpUrl":""};
  blocks['remaining_quarters'] = {"type":"remaining_quarters","message0":"%1 .quarters.remaining_after_removal_of_dollars","args0":[{"type":"input_value","name":"QUARTERS","check":"quarters"}],"output":"quarters","colour":120,"tooltip":"","helpUrl":""};
  blocks['pennies_variable_set'] = {"type":"pennies_variable_set","message0":"set %1 to %2 .pennies","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"pennies"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['nickels_variable_set'] = {"type":"nickels_variable_set","message0":"set %1 to %2 .nickels","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"nickels"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['quarters_variable_set'] = {"type":"quarters_variable_set","message0":"set %1 to %2 .quarters","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"quarters"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['dollars_variable_set'] = {"type":"dollars_variable_set","message0":"set %1 to %2 .dollars","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE","check":"dollars"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['currency_number'] = {"type":"currency_number","message0":"%1","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["pennies","nickels","quarters","dollars"],"colour":120,"tooltip":"","helpUrl":""};
  blocks['units_print'] = {"type":"units_print","message0":"print %1","args0":[{"type":"input_value","name":"TEXT"}],"previousStatement":null,"nextStatement":null,"colour":160,"tooltip":"","helpUrl":""};
  blocks['print_in_result_cell'] = {"type":"print_in_result_cell","message0":"print %1 .in result cell %2","args0":[{"type":"input_value","name":"EXP"},{"type":"input_value","name":"CELL","check":"result_cell"}],"inputsInline":true,"previousStatement":null,"nextStatement":null,"colour":160,"tooltip":"","helpUrl":""};
  blocks['result_cell_column'] = {"type":"result_cell_column","message0":"R %1","args0":[{"type":"field_dropdown","name":"COL","options":[["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"]]}],"output":"result_cell","colour":160,"tooltip":"","helpUrl":""};
  blocks['input_cell'] = {"type":"input_cell","message0":"%1 %2","args0":[{"type":"field_dropdown","name":"COL","options":[["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"]]},{"type":"field_number","name":"ROW","value":1,"min":1,"max":15}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":160,"tooltip":"","helpUrl":""};
  blocks['prompt_for_number'] = {"type":"prompt_for_number","message0":"prompt_for_number_with_message(\" %1 \")","args0":[{"type":"field_input","name":"TEXT","text":"Enter number: "}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":160,"tooltip":"","helpUrl":""};
  blocks['units_convert'] = {"type":"units_convert","message0":"%1 .units.to_units_with_conversion_factor( %2 )","args0":[{"type":"input_value","name":"NUM","check":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]},{"type":"input_value","name":"FACTOR","check":["Number","input_cell"]}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":230,"tooltip":"","helpUrl":""};
  blocks['units_remaining'] = {"type":"units_remaining","message0":"%1 .units.remaining_after_removal_of_units_of( %2 )","args0":[{"type":"input_value","name":"NUM","check":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]},{"type":"input_value","name":"FACTOR","check":["Number","input_cell"]}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":230,"tooltip":"","helpUrl":""};
  blocks['before_substring'] = {"type":"before_substring","message0":"%1 .get_before_text( %2 )","args0":[{"type":"input_value","name":"TEXT","check":"String"},{"type":"input_value","name":"SUB","check":"String"}],"inputsInline":true,"output":"String","colour":160,"tooltip":"","helpUrl":""};
  blocks['after_substring'] = {"type":"after_substring","message0":"%1 .get_after_text( %2 )","args0":[{"type":"input_value","name":"TEXT","check":"String"},{"type":"input_value","name":"SUB","check":"String"}],"inputsInline":true,"output":"String","colour":160,"tooltip":"","helpUrl":""};
  blocks['variable_general_set'] = {"type":"variable_general_set","message0":"set( %1 ).to( %2 )","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['function_defzeroinputs'] = {"type":"function_defzeroinputs","message0":"def  %1 %2 %3 end","args0":[{"type":"field_input","name":"NAME","text":"function_name"},{"type":"input_dummy"},{"type":"input_statement","name":"STACK"}],"previousStatement":null,"nextStatement":null,"inputsInline":true,"colour":290,"tooltip":"","helpUrl":""};
  blocks['function_defoneinput'] = {"type":"function_defoneinput","message0":"def  %1 ( %2 ) %3 %4 end","args0":[{"type":"field_input","name":"NAME","text":"function_name"},{"type":"field_input","name":"PARAM","text":"variable_name"},{"type":"input_dummy"},{"type":"input_statement","name":"STACK"}],"previousStatement":null,"nextStatement":null,"inputsInline":true,"colour":290,"tooltip":"","helpUrl":""};
  blocks['function_deftwoinputs'] = {"type":"function_deftwoinputs","message0":"def  %1 ( %2 , %3 ) %4 %5 end","args0":[{"type":"field_input","name":"NAME","text":"function_name"},{"type":"field_input","name":"PARAMA","text":"variable1"},{"type":"field_input","name":"PARAMB","text":"variable2"},{"type":"input_dummy"},{"type":"input_statement","name":"STACK"}],"previousStatement":null,"nextStatement":null,"inputsInline":true,"colour":290,"tooltip":"","helpUrl":""};
  blocks['function_callzeroinputs'] = {"type":"function_callzeroinputs","message0":"%1 ","args0":[{"type":"field_label","name":"NAME","text":"function_name"}],"inputsInline":true,"output":null,"colour":270,"tooltip":"","helpUrl":""};
  blocks['function_calloneinput'] = {"type":"function_calloneinput","message0":"%1 %2 )","args0":[{"type":"field_label","name":"NAME","text":"default"},{"type":"input_value","name":"ARG1"}],"inputsInline":true,"output":null,"colour":270,"tooltip":"","helpUrl":""};
  blocks['function_calltwoinputs'] = {"type":"function_calltwoinputs","message0":"%1 %2 , %3 )","args0":[{"type":"field_label","name":"NAME","text":"default"},{"type":"input_value","name":"ARG1"},{"type":"input_value","name":"ARG2"}],"inputsInline":true,"output":null,"colour":270,"tooltip":"","helpUrl":""};
  blocks['class_def'] = {"type":"class_def","message0":"class %1 %2 %3 end","args0":[{"type":"field_input","name":"NAME","text":"class_name"},{"type":"input_dummy"},{"type":"input_statement","name":"STACK"}],"inputsInline":true,"colour":290,"tooltip":"","helpUrl":""};
  blocks['text'] = {"type":"text","message0":"\"%1\"","args0":[{"type":"field_input","name":"TEXT","text":""}],"output":"String","colour":135,"tooltip":"","helpUrl":""};
  blocks['variables_set'] = {"type":"variables_set","message0":"%1 = %2","args0":[{"type":"field_variable","name":"VAR","variable":"default"},{"type":"input_value","name":"VALUE"}],"previousStatement":null,"nextStatement":null,"colour":330,"tooltip":"","helpUrl":""};
  blocks['variables_get'] = {"type":"variables_get","message0":"%1","args0":[{"type":"field_variable","name":"VAR","variable":"item"}],"output":null,"colour":330,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['math_number_general'] = {"type":"math_number_general","message0":"%1","args0":[{"type":"field_number","name":"NUM","value":0}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":230,"tooltip":"","helpUrl":"http://www.example.com/"};
  blocks['string_concatenate'] = {"type":"string_concatenate","message0":"%1 + %2","args0":[{"type":"input_value","name":"A","check":"String"},{"type":"input_value","name":"B","check":"String"}],"inputsInline":true,"output":"String","colour":160,"helpUrl":""};
  blocks['math_number_round'] = {"type":"math_number_round","message0":"%1.%2","args0":[{"type":"input_value","name":"NUM","check":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]},{"type":"field_dropdown","name":"OP","options":[["round","round"],["round_up","round_up"],["round_down","round_down"]]}],"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":null,"tooltip":null,"helpUrl":null};
  blocks['math_number_arithmetic'] = {"type":"math_number_arithmetic","message0":"%1 %2 %3","args0":[{"type":"input_value","name":"A","check":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"]},{"type":"field_dropdown","name":"OP","options":[["+","ADD"],["-","MINUS"],["*","MULTIPLY"],["/","DIVIDE"],["**","POWER"]]},{"type":"input_value","name":"B","check":"Number"}],"inputsInline":true,"output":["Number","input_cell","seconds","minutes","hours","days","pennies","nickels","quarters","dollars"],"colour":null,"helpUrl":null};

  return blocks;
}