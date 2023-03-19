def extra_end(str):
  if(len(str) <= 2): return str + str + str
  a = ""
  for x in range(len(str) - 2, len(str)): a += str[x]
  return a + a + a