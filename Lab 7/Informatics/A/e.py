import math

a = int(input())
b = int(input())
c = 0
if((a * b) < 109 and (a * b) >= 0):
    c = (a * b)
else:
    c = (a * b) % 109

print(c)