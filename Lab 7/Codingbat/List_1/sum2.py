def sum2(nums):
  sum = 0
  if(len(nums) >= 2):
    for x in range(0, 2):
      sum += nums[x]
  else:
    for x in nums:
      sum += x
  return sum