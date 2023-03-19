a = int(input())
for x in range(2, 30000):
    if(a % x == 0):
        print(x)
        exit()