def make_out_word(out, word):
  a = ""
  for x in range(0, len(out) - 2): a += out[x]
  a += word
  for x in range(len(out) - 2, len(out)): a += out[x]
  return a