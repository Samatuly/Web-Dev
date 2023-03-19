a = int(input())
b = int(input())
cnt = 0
for x in str(a):
    if(str(b) == x): cnt += 1
print(cnt)