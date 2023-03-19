def centered_average(nums):
  sum = 0
  for x in nums: sum += x
  return (sum - max(nums) - min(nums)) / (len(nums) - 2)