def xyz_there(str):
  for x in range(0, len(str) - 2):
    if(str[x - 1] != '.' and str[x] == 'x' and str[x+1] == 'y' and str[x+2] == 'z'):
      return True
  return False