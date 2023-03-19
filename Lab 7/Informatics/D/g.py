num = int(input())
s = input()
a = [int(s) for s in s.split()]
b = a[::-1]
for x in b:
    print(x, end = " ")