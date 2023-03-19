import sys

num = int(input())
s = input()
cnt = 0
a = [int(s) for s in s.split()]
if(num == len(a)):
    for x in a:
        if((x < 0 and cnt < 0) or (x > 0 and cnt > 0)): 
            print("YES")
            exit()
        cnt = x
else: exit()
print("NO")