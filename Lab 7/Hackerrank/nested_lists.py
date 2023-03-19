z = []
py_st = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    py_st.append([name,score])
        
z = []
for i in py_st:
    x = i[1]
    z.append(x)

z = list(set(z))
z.sort()
z.reverse()
z.pop()    
sec_low = z.pop()

student = []
for j in py_st:
    if j[1] == sec_low:
        student.append(j[0])

student.sort()

for k in student:
    print(k)