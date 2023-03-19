def string_splosion(str):
  a = ""
  for x in range (len(str)):
    for y in range (len(str)):
      if(y <= x):
        a += str[y]
  return a