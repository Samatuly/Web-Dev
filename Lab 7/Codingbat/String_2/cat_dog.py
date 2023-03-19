def cat_dog(str):
  cat = 0
  dog = 0
  for x in range(0, len(str) - 2):
    if(str[x] == 'c' and str[x + 1] == 'a' and str[x + 2] == 't'): cat += 1
    if(str[x] == 'd' and str[x + 1] == 'o' and str[x + 2] == 'g'): dog += 1
  if(cat == dog): return True
  return False
