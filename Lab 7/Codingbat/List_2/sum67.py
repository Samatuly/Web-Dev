def sum67(nums):
  sum = 0
  x  = 0
  while(x < len(nums)):
    if(nums[x] != 6): sum += nums[x]
    if(nums[x] == 6):
      while(nums[x] != 7):
        x += 1
    x += 1
  return sum