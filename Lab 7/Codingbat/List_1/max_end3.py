def max_end3(nums):
  a = []
  mx = 0
  if(nums[0] > nums[len(nums) - 1]): mx = nums[0]
  else: mx = nums[len(nums) - 1]
  for x in range(0, len(nums)):
    a.append(mx)
  return a