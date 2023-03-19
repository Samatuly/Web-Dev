def lucky_sum(a, b, c):
  s = [a, b, c]
  sum = 0
  for x in s:
    if(x == 13): return sum
    sum += x
  return sum