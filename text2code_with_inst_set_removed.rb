require "./time_instructions.rb"

class Fixnum
	def ^(exponent); self**exponent end
end

class Float
	def even?; self.whole? ? self.to_i.even? : false; end
	def odd?; self.whole? ? self.to_i.odd? : false; end
	def times &block; self.to_i.times(&block); end
end

class Numeric
	def ^(exponent); self**exponent end
	def sqrt; Math.sqrt(self); end
	def abs; self.abs; end
	def positive?; self > 0; end
	def negative?; self < 0; end
	def whole?; self.round == self; end
	def divisible_by?(d); self.modulo(d) == 0; end
	def factor_of?(m); m.divisible_by?(self); end
	def prime?
		return false if !self.whole? || self <= 1
		for d in 2..Math.sqrt(self) do
			return false if self.divisible_by?(d)
		end
		return true
	end

	def is(inst)
		Text2Code::INST_SET.send(:is, inst)
		set __free_num__ to self
		Text2Code::INST_SET.send(:__free_num__, inst)
	end

	def divided(inst)
		Text2Code::INST_SET.send(:divided, inst)
		set __free_num__ to self
		Text2Code::INST_SET.send(:__free_num__, inst)
	end
end

class String
	def char_at(index); self[index-1..index-1]; end
	def substring(startIndex,endIndex); self[startIndex-1...endIndex]; end
	def sfind(needle); self.index(needle)+1 end
	def rfind(needle); self.rindex(needle)+1 end

	def get(inst)
		Text2Code::INST_SET.send(:get, inst)
		set __free_string__ to self
		Text2Code::INST_SET.send(:__free_string__, inst)
	end

	def find(inst)
		Text2Code::INST_SET.send(:find, inst)
		set __free_string__ to self
		Text2Code::INST_SET.send(:__free_string__, inst)
	end
end

module Text2Code
	class Utility
		def self.prompt_num(msg)
			puts msg
			gets.to_f
		end
		def self.prompt_str(msg)
			puts msg
			gets.chomp
		end
		def self.length(s); s.length; end
		def self.sqrt(x); Math.sqrt(x); end
		def self.abs(x); x.abs; end
		def self.rand_int(low, high); rand(low.floor..high.floor); end
		def self.rand_dec(low, high); rand(low.to_f..high.to_f); end 
	end
	class Variable
		def initialize(val=nil)
			@value = val
		end
		def get(*args)
			@value
		end
		def set(val)
			@value = val
		end
		def increase(offset)
			@value += offset
		end
		def decrease(offset)
			@value -= offset
		end
		def multiply(offset)
			@value *= offset
		end
		def divide(offset)
			@value /= offset
		end
		def method_missing(method_name, *args)
			@value.send(method_name, *args)
		end
	end
	class InstructionComponents
		attr_reader :has_receiver, :arguments, :messages
		#attr_reader :part_types

		def initialize(instComponents=nil)
			if(instComponents.class == InstructionComponents)
				@has_receiver = instComponents.has_receiver
				@messages = instComponents.messages
				@arguments = instComponents.arguments
				#@part_types = instComponents.part_types
			else
				@has_receiver = false
				@messages = [];
				@arguments = 0
				#@part_types = nil
			end
		end

		def add_type(part_type, part_val=nil)
			case part_type
			when :receiver
				has_receiver = @has_receiver
				@has_receiver = true
				instComponents = InstructionComponents.new(self)
				@has_receiver = has_receiver
			when :message
				messages = @messages
				@messages = @messages + [] # copy of array
				@messages.push(part_val)
				instComponents = InstructionComponents.new(self)
				@messages = messages
			when :argument
				@arguments += 1
				instComponents = InstructionComponents.new(self)
				@arguments -= 1
			when :optional
				# hack : these should be optional so not added as part of the messages
				messages = @messages
				@messages = @messages + [] # copy of array
				@messages.push(part_val)
				instComponents = InstructionComponents.new(self)
				@messages = messages
			end

			return instComponents
		end

		def is_complete?
			has_receiver && @messages != []
		end

		def has_schema(inst)
			return inst.arguments.length == @arguments && 
				   (!!inst.receiver == @has_receiver || inst.variables.length > 0) &&
				   (@messages & inst.methods).length >= (@messages.length < inst.methods.length ? @messages.length : inst.methods.length) && 
				   (@messages & inst.methods).length >= (@messages.length > inst.methods.length ? @messages.length - 1 : inst.methods.length - 1)
				   # this needs to be fixed
				   #@messages.all? { |message| inst.methods.include?(message) } && 
				   #inst.methods.all? { |message| @messages.include?(message) }
			       #(inst.method_name == @message || inst.methods.include?(@message))
		end
	end

	class Instruction
		attr_accessor :receiver, :method_name, :arguments
		attr_accessor :methods, :variables

		def initialize(*args)
			args[0].class == Instruction ? args[0].copy : Instruction.create_from_args(self, :args, *args)
		end

		def self.instruction_types
			[:args, :receiver_last]
			#[:receiver_last, :args]
		end

		def self.create_all_instruction_types(*args)
			return Instruction.instruction_types.map {|type| Instruction.create_from_args(nil, type, *args)}
		end

		def copy
			inst = Instruction.new 
			inst.receiver = @receiver
			inst.method_name = @method_name
			inst.arguments = @arguments.map {|argument| argument} # shallow copy of array
			inst.methods = @methods
			inst.variables = @variables

			inst
		end

		def self.create_from_args(inst, type, *args)
			inst = inst || Instruction.new
			inst = args[0] if args.length > 0 && args[0].class == Instruction
			#filteredArgs = args.select {|arg| arg.class != Instruction}

			case type
				when :receiver_last
					last_arg = args.length > 0 ? args.pop : nil
					inst.receiver = last_arg.class == Instruction ? last_arg.receiver : last_arg
			end

			inst.arguments = inst.arguments ? args + inst.arguments : args unless (args.length > 0 && args[0].class == Instruction) # for both :args and :receiver_last
			#inst.arguments = inst.arguments ? filteredArgs + inst.arguments : filteredArgs
			inst.methods = inst.methods || []
			inst.variables = inst.variables || []

			inst
		end

		#def construct_from_parts
		#end
	end

	class InstructionSet
		def initialize
			@instruction_schemas = {:method_missing => [[InstructionComponents.new,:get]]} #name-value pairs
			#@instruction_schemas = {}
			@variable_set = {}
		end

		def add_instruction_schema(schema_parts, method_to_call)
			# Consider saving current instead of previous
			prev_inst_comps = InstructionComponents.new
			curr_inst_comps = []
			schema_parts.reverse.each_with_index do |part, index|
				if part.class == Symbol
					curr_inst_comps = prev_inst_comps.add_type(part)
				elsif part.class == Hash
					part.each do |method_name, instruction_type|
						method_name = (method_name != :variable_) ? method_name : :method_missing

						@instruction_schemas[method_name] = [] unless @instruction_schemas.has_key?(method_name)
						curr_inst_comps = prev_inst_comps.add_type(instruction_type, method_name)
						@instruction_schemas[method_name].push([prev_inst_comps, index == schema_parts.length-1 ? method_to_call : nil])

					end
				end
				prev_inst_comps = curr_inst_comps
			end

		end

		def create_methods
			@instruction_schemas.each do |method_name, inst_component_method_pairs_arr|
				self.class.send(:define_method, method_name) do |*args|
					method_to_call = nil
					is_variable = false

					if method_name == :method_missing then
						method_nameV = args.shift() # changing method_nameV to method_name makes it defined on subsequent calls?
						@variable_set[method_nameV] = @variable_set[method_nameV] || Variable.new
						is_variable = true
					end
					
					pair = nil
					instruction_to_run = Instruction.create_all_instruction_types(*args).detect do |instruction|
						instruction.methods.push(method_name) unless is_variable
						instruction.variables.push(method_nameV) if is_variable

						pair = inst_component_method_pairs_arr.detect { |component| component[0].has_schema(instruction) }
						method_to_call = pair[1] if pair.class == Array

						if pair
							#instruction.method_name = instruction.method_name || pair[0].message
							instruction.receiver = instruction.receiver || @variable_set[instruction.variables.shift()] if (pair && pair[0].has_receiver)
						end

						pair
					end

					if method_to_call && instruction_to_run
						if is_variable && instruction_to_run.receiver == nil
							instruction_to_run.receiver = @variable_set[instruction_to_run.variables.shift()]
						end
						instruction_to_run.receiver = instruction_to_run.receiver || Utility
						return instruction_to_run.receiver.send(method_to_call, *instruction_to_run.arguments)
					end

					return instruction_to_run || Instruction.new(*args)
					
					nil
				end
			end

		end

		def getMatchingSchema(partial_inst)

		end
	end
end