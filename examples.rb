require './text2code.rb'

set generic_number_variable to 5
set some_other_number_variable to 12.5

puts remainder of generic_number_variable divided by 10
puts generic_number_variable is even
puts generic_number_variable is odd
puts generic_number_variable is prime
puts generic_number_variable is whole
puts generic_number_variable is positive
puts generic_number_variable is negative
puts generic_number_variable is divisible by 10

puts square root generic_number_variable
puts absolute generic_number_variable

puts increase generic_number_variable by 10
puts decrease generic_number_variable by some_other_number_variable
puts multiply generic_number_variable by 10
puts divide generic_number_variable by some_other_number_variable

set string_variable to "abcdefgdef"
puts length of string_variable
puts from text string_variable find first occurrence of text "abc"
puts from text string_variable find last occurrence of text "def"
puts from text "abcdefgdef".find first occurrence of text "abc"
puts from text string_variable get letter 1
puts from text "abcdefgdef".get letter 1

set str to "abcdefgdef"
set start to 3
set endNum to 7

puts from text str get substring from letter start, endNum

puts prompt to get text with message "Enter something interesting:"
puts prompt to get text with message "Enter some interesting number:"

set generic_number_variable to 3.14
set generic_string_variable to "Ruby and Text2Code!"
set generic_boolean_variable to true

puts (2 * generic_number_variable).to_s + " is the approximate circumference of the unit circle."
puts (from text generic_string_variable get substring from letter 1, (length of generic_string_variable)-1) + " make a great combination!"
if generic_boolean_variable then
    puts "Yes, I really am true!"
end