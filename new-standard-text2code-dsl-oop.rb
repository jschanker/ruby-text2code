module Text2Code
  UNIT_TYPES = [:seconds, :minutes, :hours, :days, :pennies, :nickels, :quarters, :dollars, :units]
  UNIT_TRIPLES = [[:seconds, :minutes, 60], [:minutes, :hours, 60], [:hours, :days, 24], 
                  [:pennies, :nickels, 5], [:nickels, :quarters, 5], [:quarters, :dollars, 4]]
  DEFAULT_UNIT_NAME = :units
  class Unit
    attr_reader :type, :quantity
    def initialize(quantity=0, type="units")
      if(quantity.class == Numeric || quantity.class == Fixnum)
        @quantity = quantity
        @type = type
      elsif(quantity.class <= Unit)
        @quantity = quantity.quantity.to_i
        @type = quantity.type
      else
        @quanity = 0
        @type = "units"
      end
    end
    def to_s
      @quantity.to_s + " " + @type.to_s
    end
    def to_i
      @quantity.to_i
    end
    def to_units_with_conversion_factor(factor)
      Text2Code::convert(self.type, Text2Code::DEFAULT_UNIT_NAME, factor.to_i, self)
    end
    def remaining_after_removal_of_units_of(factor)
      Text2Code::get_remaining_after_convert(self.type, self.type, factor.to_i, self) 
    end
      
    UNIT_TRIPLES.each do |from_type, to_type, conversion_factor|
      method_name_to = ("to_" + to_type.to_s).to_sym
      method_name_remaining = ("remaining_after_removal_of_" + to_type.to_s).to_sym
      self.send(:define_method, method_name_to) do
        Text2Code::convert(from_type.to_s, to_type.to_s, conversion_factor, self)
      end
      self.send(:define_method, method_name_remaining) do
        Text2Code::get_remaining_after_convert(from_type.to_s, to_type.to_s, conversion_factor, self)
      end
    end
    Text2Code::UNIT_TYPES.each do |method_name|
      self.send(:define_method, method_name) do
        Text2Code::set_to_units(self, method_name.to_s)
      end
    end
  end
  
  def self.set_to_units(units, to_type)
    if units.class == Unit && to_type.to_s != units.type.to_s
      throw "PLEASE READ THIS ERROR MESSAGE: Attempting to use variable with value in " + to_type.to_s + " but its value has actual type " + units.type + " instead."
    elsif units.class == Unit
      if(to_type == "seconds")
        Seconds.new(units)
      elsif(to_type == "minutes")
        Minutes.new(units)
      elsif(to_type == "hours")
        Hours.new(units)
      elsif(to_type == "days")
        Days.new(units)
      elsif(to_type == "pennies")
        Pennies.new(units)
      elsif(to_type == "nickels")
        Nickels.new(units)
      elsif(to_type == "quarters")
        Quarters.new(units)
      elsif(to_type == "dollars")
        Dollars.new(units)
      else
        Unit
      end
    else
      Unit.new(units, to_type)
    end
  end
  
  def self.convert(from_type, to_type, conversion_factor, units)
    if units.class == Unit && from_type.to_s != units.type.to_s
      throw "PLEASE READ THIS ERROR MESSAGE: Expected input to " + "to_" + to_type.to_s + " to have units in " + from_type.to_s + " but function received input with units in " + units.type.to_s + " instead.  To convert from " + units.type.to_s + ", you can define a class " + units.type.to_s.capitalize.chop + " with a to_" + to_type.to_s + " method."
    else
      Unit.new(units.to_i / conversion_factor.to_i, to_type.to_s)
    end
  end
  
  def self.get_remaining_after_convert(from_type, to_type, conversion_factor, units)
    if units.class == Unit && from_type.to_s != units.type.to_s
      throw "PLEASE READ THIS ERROR MESSAGE: Expected input to remaining_after_removal_of_" + to_type.to_s + " to have units in " + from_type.to_s + " but function received input with units in " + units.type.to_s + " instead.  To get the remaining from " + units.type.to_s + ", you can define a class " + units.type.to_s.capitalize.chop + " with a remaining_after_removal_of_" + to_type.to_s + " method."
    else
      Unit.new(units.to_i % conversion_factor.to_i, from_type.to_s)
    end
  end
end

class Seconds < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "seconds")
  end
end

class Minutes < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "minutes")
  end
end

class Hours < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "hours")
  end
end

class Days < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "days")
  end
end

class Pennies < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "pennies")
  end
end

class Nickels < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "nickels")
  end
end

class Quarters < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "quarters")
  end
end

class Dollars < Text2Code::Unit
  def initialize(quantity=0)
    super(quantity, "dollars")
  end
end

class Numeric
  Text2Code::UNIT_TYPES.each do |method_name|
      self.send(:define_method, method_name) do
        Text2Code::Unit.new(self.to_i, method_name.to_s)
      end
  end
end

class String
  def get_before_text(sub)
    index = self.index(sub)
    index ? self[0...index] : self
  end
  def get_after_text(sub)
    index = self.index(sub)
    index ? self[index+sub.length...self.length] : self
  end
end