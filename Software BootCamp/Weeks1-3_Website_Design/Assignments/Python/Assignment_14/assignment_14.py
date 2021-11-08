def checkPrime(number):
    #what constitutes a prime- only two factors (1 and itself)
    primeCheck = 0;
    for x in range (1,number+1):
        if number % x == 0:
            primeCheck += 1
    if primeCheck == 2:
        print(x, "This number is prime")
        return True
    
    else:
        print(x, "This number is not prime")
        return False
'''
def someFunction(schoolID,*firstName, **last_email):
    list_holder = [] #append each individual item to the list
    #go through the final list and seperate the items so its by 1 row

    for name in firstName:
        list_holder.append(schoolID, name, last_email[name])
    for item in list_holder:
        print(item)
    for name in last_email():
        #print(schoolID)
        print(email, last_email[name])
         
print(someFunction(100,["Steve","Jacob"],{'Peter':4, 'John':26}))
'''
def someFunction(schoolID,*firstName, **last_email):
    print(schoolID)
    for name in firstName:
        print(name)
        for ln, email in last_email.items():
            print(ln, email)
