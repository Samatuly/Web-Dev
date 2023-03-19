a = int(input())
num = []
cnt = 0
x = [int(x) for x in input().split()]
for y in x:
    if(cnt % 2 == 0): print(x[cnt], end = " ")
    cnt += 1