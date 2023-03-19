import math

a = int(input())
cnt = 0
for x in range(1, a + 1):
    if(math.sqrt(x) == math.floor(math.sqrt(x))):
        cnt += 1
        print(x)