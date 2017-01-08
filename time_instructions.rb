require "./text2code.rb"

module Text2Code
  UNIT_TYPES = [:seconds, :minutes, :hours, :days, :pennies, :nickels, :quarters, :dollars]
  UNIT_TRIPLES = [[:seconds, :minutes, 60], [:minutes, :hours, 60], [:hours, :days, 24], 
                  [:pennies, :nickels, 5], [:nickels, :quarters, 5], [:quarters, :dollars, 4]]
  class Unit
    attr_reader :type
    UNIT_TYPES.each do |method_name|
      self.send(:define_method, method_name) do
        Text2Code::set_to_units(self, method_name.to_s)
      end
    end
    
    def initialize(quantity=0, type=Numeric)
      @quantity = quantity
      @type = type
    end
    
    def to_s
      @quantity.to_s + " " + @type.to_s
    end
    def to_i
      @quantity.to_i
    end
    #def minutes
    #  set_to_units(self, "minutes")
    #end
  end
  
  def self.set_to_units(units, to_type)
    if units.class == Unit && to_type.to_s != units.type.to_s
      throw "PLEASE READ THIS ERROR MESSAGE: Attempting to set variable to value in " + to_type.to_s + " but its value has actual type " + units.type + " instead."
    elsif units.class == Unit
      units
    else
      Unit.new(units, to_type)
    end
  end
  
  def self.convert(from_type, to_type, conversion_factor, units)
    if units.class == Unit && from_type.to_s != units.type.to_s
    throw "PLEASE READ THIS ERROR MESSAGE: Expected input to " + from_type.to_s + "_to_" + to_type.to_s + " to have units in " + from_type.to_s + " but function received input with units in " + units.type.to_s + " instead."
    else
      Unit.new(units.to_i / conversion_factor.to_i, to_type.to_s)
    end
  end
  
  def self.get_remaining_after_convert(from_type, to_type, conversion_factor, units)
    if units.class == Unit && from_type.to_s != units.type.to_s
      throw "READ THIS ERROR MESSAGE: Expected input to remaining_" + from_type.to_s + "_after_" + to_type.to_s + "_removed to have units in " + from_type.to_s + " but function received input with units in " + units.type.to_s + " instead."
    else
      Unit.new(units.to_i % conversion_factor.to_i, from_type.to_s)
    end
  end
	
	inst_set = InstructionSet.new

	inst_set.add_instruction_schema([{:set => :message}, {:variable_ => :receiver}, {:to => :optional}, :argument], :set)

	inst_set.create_methods

	INST_SET = inst_set
end

class Numeric
  Text2Code::UNIT_TYPES.each do |method_name|
    self.send(:define_method, method_name) do
      Text2Code::Unit.new(self.to_i, method_name.to_s)
    end
  end
end

Text2Code::UNIT_TRIPLES.each do |from_type, to_type, conversion_factor|
  method_name_to = (from_type.to_s + "_to_" + to_type.to_s).to_sym
  method_name_remaining = ("remaining_" + from_type.to_s + "_after_" + to_type.to_s + "_removed").to_sym
  self.send(:define_method, method_name_to) do |units|
    Text2Code::convert(from_type.to_s, to_type.to_s, conversion_factor, units)
  end
  self.send(:define_method, method_name_remaining) do |units|
    Text2Code::get_remaining_after_convert(from_type.to_s, to_type.to_s, conversion_factor, units)
  end
end

def method_missing(name, *args)
	Text2Code::INST_SET.send(name, *args) # redirect to standard Text2Code Instruction Set
end