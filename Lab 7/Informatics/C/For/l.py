a = int(input())
cnt = 0
b = 0
while a > 0:
    c = a % 10
    if(c == 1): cnt = cnt + pow(2, b)
    a //= 10
    b += 1
print(cnt)