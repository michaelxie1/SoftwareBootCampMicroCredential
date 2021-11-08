#open a file
'''
f=open('rand.txt', 'r')
first=f.read()#entire file

first2 = f.readline() #reads first line
second = f.readline() #reads second line since first is already read
print(first)
print(first2)
print(second)
f.close
'''
################OBJECT-ORIENTED PROGRAMMING###################3
#Object and Classes: Object ID created from class.
'''
class Staff:
    #initiates all the varaiables
    def __init__(self, pPosition, pName, pPay):
        self.position = pPosition
        self.name = pName
        self.pay = pPay
        print('Just created a staff object')

    def __str__(self):
        return "Position = %s, Name = %s, Pay = %d "%(self.position, self.name, self.pay)
    
    def calculatePay(self):
        prompt = '\nEnter the number of hours your worked for %s: '%(self.name)
        hours=input(prompt)
        prompt='\nEnter the hourly rate for the %s: '%(self.name)
        hourlyRate = input(prompt)
        self.pay=int(hours)*int(hourlyRate)
        return self.pay

#property, add to class
@property
def positon(self):
    print("getter method")
    return self._position

@position.setter
def position(self, value):
    if value == 'Manager' or value == 'entery':
        self._position=value
    else:
        print('Position is invalid. No changes are made')



class A:
    def __init__(self,pName):
        self.__c = pName


officeStaff1=Staff("entry","John",0)

officeStaff1.name
officeStaff1.position

officeStaff1.calculatePay()
officeStaff1.pay

officeStaff2 = ("Manager","Jack",0)


temp=A
'''
#create class that shows company name and employee salary
class ProgStaff:
    __init__(self, company, salary):
        self.company = company
        self.salary = salary

    





        
