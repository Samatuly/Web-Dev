def count_hi(str):
  cnt = 0
  for x in range(1, len(str)):
    if(str[x] == 'i' and str[x - 1] == 'h'): cnt += 1
  return cnt