import sys
import pdb

def bits(f):
  bytes = (ord(b) for b in f.read())
  for b in bytes:
    for i in xrange(8):
      yield (b >> i) & 1

if __name__ == "__main__":
  Matrix = [[[0 for  s in range (4)] for x in range(16)] for y in range(16)]
  s = 0
  x = 0
  y = 0
  for b in bits(open('a.maz', 'r')):
    Matrix[x][y][s] = b
    if (s<3):
      s=s+1
    else:
      s=0
      if (x<15):
        x=x+1
      else:
        x=0
        if (y<15):
          y=y+1
        else:
          y=0

  print Matrix
