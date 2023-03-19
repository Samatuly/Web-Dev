def first_half(str):
  a = ""
  for x in range(0, len(str) / 2):
    a += str[x]
  return a