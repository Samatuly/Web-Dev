def near_ten(num):
  if(num % 10 <= 2 or 10 - (num % 10) <= 2): return True
  return False