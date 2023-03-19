def same_first_last(nums):
  if(len(nums) == 1): return True
  elif(len(nums) == 0): return False
  elif(nums[0] == nums[len(nums) - 1]): return True
  return False