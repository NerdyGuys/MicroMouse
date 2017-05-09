import sys
import os
import pdb

root_dir = './mazes/'

def bits(f):
  bytes = (ord(b) for b in f.read())
  for b in bytes:
    for i in xrange(8):
      yield (b >> i) & 1

if __name__ == "__main__":
  os.chdir(root_dir)
  for filename in os.listdir('.'):
    if filename.endswith('.maz'):
      (prefix, sep, suffix) =  filename.rpartition('.')
      new_filename = prefix + '.txt'
      print new_filename
      f = open(new_filename, 'w')
      for b in bits(open(filename, 'r')):
        f.write("%s\n" % b)
      f.close()
