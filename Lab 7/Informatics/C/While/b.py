a = int(input())
x = 2
while(x <= a):
    if(a % x == 0):
        print(x)
        exit()
    x += 1