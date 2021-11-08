myList1 = [1,2,3,4,"Hello"]
myList2 = myList1[1:]
print(myList2)

myList2.append("New Variable")
myList3=myList2.pop(2)
myList2.pop(2)



print(myList2)
print(myList3)



list_change = ["hello", 2, 4, "Item4", ["Inside:","List"]]
string_ex="Use this string to search words for the example"
string_ex2="word"
int_chain = "12345"
space_string = "   "
title_string = "This Is A Title Every Letter Is Cap"
lower_string = "lower string is this"
upper_string = "THIS IS CAPS"
replace_string = "(((Replace this text to be better!)"
split_string = "This, does, not, make, any, sense, please change it"
starter_string = "This will start with this"
string_splitliner = "This\n string originally\n spans many lines \n now" 
no_sense = "....@@@$$$. string "
lower_upper_string = "thIs Is WeIrD StrInG"

print(string_ex.count("this", 4, 20))#returns # of times this is between index 4
#and 20

print(string_ex.endswith("o", 0, 3)) #sees if it ends with o

print(string_ex.index("this",0, 20)) #returns index of this (starting-index20)

print(list_change[3].isalnum())#checks both alphanumerical string

print(string_ex2.isalpha())#checks if entire string=>alphabetical

print(int_chain.isdigit())#checks if the string is only made of digits

print(space_string.isspace())#checks if string is only spaces (returns false if
#the string is empty)

print(title_string.istitle()) #checks if each word is capped

print(lower_string.islower()) #checks all letters to be lowercase

print(upper_string.isupper()) #checks is string is all uppercase

print(replace_string.replace("(", "!!", 2))#replaces given value with new value,
#the third value amount of times

print(split_string.split(", ", 6)) #splits on what is specified the second number
#of times

print(starter_string.startswith("This")) #checks string starts with "This"

print(string_splitliner.splitlines(True))#splits the lines based on \n
#if true, it will include the \n char if false it will not

print(no_sense.strip(".@$"))# removes all first instances of these chars

print(lower_upper_string.upper()) #uppercases the entire string

