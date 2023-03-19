def first_two(str):
  if(len(str) <= 2): return str
  a = ""
  for x in range(0, 2):
    a += str[x]
  return a
