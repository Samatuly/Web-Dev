def array_front9(nums):
  cnt = 0
  ind = 0
  for x in nums:
    if(ind <= 3 and nums[ind] == 9): cnt += 1
    if(ind > 3 and cnt == 0): return False
    ind += 1
  if(cnt > 0): return True
  else: return False