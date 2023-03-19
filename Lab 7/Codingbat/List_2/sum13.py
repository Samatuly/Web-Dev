def sum13(nums):
  sum = 0
  i = 0
  while(i < len(nums)):
    if(nums[i] != 13): sum += nums[i]
    else: i += 1
    i += 1
  return sum