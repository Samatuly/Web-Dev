def non_start(a, b):
  txt = ""
  if(len(a) > 1):
    for x in range(1, len(a)):
      txt += a[x]
  if(len(b) > 1):  
    for x in range(1, len(b)):
      txt += b[x]
  return txt