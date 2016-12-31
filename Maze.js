function Maze() {
  this.x = 0;
  this.y = 0;
  this.North = false;
  this.East = false;
  this.South = false;
  this.West = false;
  
  this.DrawSq = function () {
    fill(MazeColor);
    stroke(200);
    strokeWeight(SquareSize/20);
    rect(this.x*SquareSize+OffSet,this.y*SquareSize+OffSet,SquareSize,SquareSize);
    textSize(25);
    textAlign(CENTER,CENTER);
    fill(155);
    if (this.x==0 && this.y==0){
      text("S",(this.x+0.5)*SquareSize+OffSet,(this.y+0.5)*SquareSize+OffSet); 
    } else if ((this.x == MazeSize/2 || this.x == MazeSize/2-1)&&(this.y == MazeSize/2 || this.y == MazeSize/2-1)){
      text("G",(this.x+0.5)*SquareSize+OffSet,(this.y+0.5)*SquareSize+OffSet); 
    } 
  }

  this.DrawWall = function() {
     // draw the wall;
    strokeWeight(WallSize);
    stroke(WallColor);

    if (this.North) {
      line(this.x*SquareSize+OffSet,this.y*SquareSize+OffSet, (this.x+1)*SquareSize+OffSet,this.y*SquareSize+OffSet);
    }   
    if (this.East) {
      line((this.x+1)*SquareSize+OffSet,this.y*SquareSize+OffSet, (this.x+1)*SquareSize+OffSet,(this.y+1)*SquareSize+OffSet);
    }  
    if (this.South) {
      line((this.x)*SquareSize+OffSet,(this.y+1)*SquareSize+OffSet, (this.x+1)*SquareSize+OffSet,(this.y+1)*SquareSize+OffSet);
    } 
    if (this.West) {
      line((this.x)*SquareSize+OffSet,this.y*SquareSize+OffSet, (this.x)*SquareSize+OffSet,(this.y+1)*SquareSize+OffSet);
    }  
  }
}
