Text2Code
==
An attempt at creating a useful internal Domain-Specific Language in Ruby to allow people new to programming to focus more on solving problems and less on translating algorithms into precise language-specific instructions.

This version of the blocks uses functions alone without the Ruby OOP.  One disadvantage is that composed functions are evaluated from the innermost one to the outermost one, potentially making it more difficult for a beginner to follow.  Instead, we will try to follow a more Ruby-like or JQuery natural form in which methods can be chained together, with each one resulting in an object having an adjacent method on the right that can be called on it next.  In this way, the text reads more like English, from left to right (e.g., 5.seconds.to_minutes.minutes.to_hours.hours.to_days)
