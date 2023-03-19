def round_sum(a, b, c):
  s = [a, b, c]
  sum = 0
  for x in s:
    if(x % 10 >= 5): sum += x + (10 - (x % 10))
    else: sum += x - (x % 10)
  return sum