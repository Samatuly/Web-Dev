import sys

num = int(input())
s = input()
cnt = sys.maxsize
y = 0
cnt2 = 0
a = [int(s) for s in s.split()]
for x in a:
    if(x > cnt): cnt2 += 1
    cnt = x
print(cnt2)