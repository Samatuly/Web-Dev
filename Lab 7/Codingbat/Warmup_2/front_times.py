def front_times(str, n):
  a = ""
  ind = int(0)
  if(len(str) < 3):
    a = str
  else:
    while(ind != 3):
      a += str[ind]
      ind += 1
    
  b = ""
  for x in range(0, n):
    b += a
  return b