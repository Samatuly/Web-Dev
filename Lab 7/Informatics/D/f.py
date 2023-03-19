num = int(input())
s = input()
cnt = 1
cnt2 = 0
a = [int(s) for s in s.split()]
if(num == len(a)):
    while(cnt < (len(a) - 1)):
        if(a[cnt] > a[cnt + 1] and a[cnt] > a[cnt - 1]): cnt2 += 1
        cnt += 1
else: exit()
print(cnt2)