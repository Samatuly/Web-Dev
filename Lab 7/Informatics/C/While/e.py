a = int(input())
cnt = 0
while(1):
    if(pow(2, cnt) >= a):
        print(cnt)
        exit()
    cnt += 1