import random as r
'''
myName = input("Please enter your name: ")
myAge=input("Please enter your age: ")


print("Hello World my name is", myName, "and I am ", myAge, "years old")
print("Hello World, my name is %s years old"%(myName))
print("Hello World my name is {} and I am {} years old".format(myName,myAge))


print('\\')
print('Hello I am 5\9" tall')



    pets = ["cats", "dogs", "fish", "lizard"]
    for pet in pets:
        print(pet)


    for index, myPets in enumerate(pets):
        print(index, myPets)
    age = {"Peter":3, "John":26}
    for person in age:
        print(person, age[person])
    counter = 8
    while counter > 0:
        print("counter:", counter)
        counter-=1


    j=0

    for i in range(10):
        j+=2
        print(i,j)
        if j==6:
            break


    answer = 0
    try:
        answer = 12/0
        print(answer)

    except:
        print("Error")
'''

######
'''
    def functionName(list of parameters):
        code body
        return expression

'''
def checkPrime(number):
    #what constitutes a prime- only one factor
    primeCheck = 0;
    for x in range (1,number+1):
        if number % x == 0:
            primeCheck += 1
    if primeCheck == 2:
        print(x, "This number is prime")
    
    else:
        print(x, "This number is not prime")

def addNumber(*num):#1 asterisk => 1 value
    sum=0
    for i in num:
        sum+=i
    print(sum)
#addNumber (1,2,3,45,6,7)
print(r.randrange(1,10))

#%d=> digit, number, %s => string
def showAge(**age):#2 asterisk => dictionary: key-value
    for i, j in age.items():
        print("Name=%s, Age=%d"%(i,j))
#showAge(Peter=5,John=7)
#showAge(Peter=5,John=7,Yvonne=20)

def identifier(schoolID,*firstName, **lastEmail):
    return 0


