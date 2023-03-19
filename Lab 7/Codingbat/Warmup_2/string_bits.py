def string_bits(str):
  a = ""
  for x in range(len(str)):
    if(x % 2 == 0):
      a += str[x]
  return a