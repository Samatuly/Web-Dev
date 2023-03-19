a = int(input())
cnt = 2
if(a == 0):
    print(0)
    exit()
elif(a == 1):
    print(1)
    exit()
elif(a == 2):
    print(2)
    exit()
else:
    for x in range(2, (a // 2) + 1):
        if(a % x == 0):
            cnt += 1
print(cnt)