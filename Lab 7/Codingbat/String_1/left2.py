def left2(str):
  a = ""
  for x in range (2, len(str)): a += str[x]
  for x in range (0, 2): a += str[x]
  return a