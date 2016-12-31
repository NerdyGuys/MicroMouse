function Maze() {
  this.x = 0;
  this.y = 0;
  
  this.Display = function () {
    fill(MazeColor);
    stroke(0);
    strokeWeight(SquareSize/20);
    rect(this.x*SquareSize,this.y*SquareSize,SquareSize,SquareSize);
  }
}