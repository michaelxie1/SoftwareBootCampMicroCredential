print("Hello")

message = """The price of the %s laptop is %d USD amd the exchange rate
is %4.2f USD to 1 Eur"""%('Apple',1299,1.23452)
print(message)

message = """The price of the {0:s} laptop is {1:d} USD amd the exchange rate
is {2:4.2f} USD to 1 Eur""".format('Apple',1299,1.23452)
print(message)

message3 = '{} is easier than {} '.format('Python','Java')
message4 = '{} is easier than {} '.format('Python','Java')
message5 = '{} and {}'.format(1.32324,12)
message6 = '{}'.format(1.2231)
print(message3, message4, message5, message6)

