num = int(input())
s = input()
cnt = 0
a = [int(s) for s in s.split()]
if(num == len(a)):
    for i in a:
        if i > 0: cnt += 1
else: exit()
print(cnt)