a = int(input())
cnt = 0
while(pow(2, cnt) <= a):
    if(pow(2, cnt) == a):
        print("YES")
        exit()
    cnt += 1
print("NO")