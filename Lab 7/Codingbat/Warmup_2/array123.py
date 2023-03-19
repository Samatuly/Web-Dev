def array123(nums):
  for x in range(0, len(nums)-2):
    if nums[x] == 1 and nums[x+1] == 2 and nums [x+2] == 3:
      return True
  return False