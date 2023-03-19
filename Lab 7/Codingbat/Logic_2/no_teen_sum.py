def no_teen_sum(a, b, c):
  s = [a, b, c]
  sum = 0
  for x in s:
    if(x >= 13 and x <= 19 and x != 15 and x != 16): sum += 0
    else: sum += x
  return sum