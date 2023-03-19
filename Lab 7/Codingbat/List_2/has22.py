def has22(nums):
  for x in range(0, len(nums) - 1):
    if(nums[x] == 2 and nums[x + 1] == 2): return True
  return False
