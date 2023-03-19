def without_end(str):
  a = ""
  for x in range(1, len(str) - 1):
    a += str[x]
  return a
