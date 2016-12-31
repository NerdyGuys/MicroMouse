function Mouse() {
  this.x = 0;
  this.y = 0;
  this.destx = int(random(MazeSize));
  this.desty = int(random(MazeSize));
  
  this.Move = function() {
    if (this.x < this.destx) {
      this.x++;
    } else if (this.x > this.destx) {
      this.x--;
    } else if (this.y < this.desty) {
      this.y++;
    } else if (this.y > this.desty) {
      this.y--; 
    }

  }

  this.Display = function () {
    fill(MouseColor);
    stroke(0);
    strokeWeight(1);
    ellipse((this.x+0.5)*SquareSize+OffSet,(this.y+0.5)*SquareSize+OffSet,MouseWidth,MouseHeight);
    textSize(20);
    textAlign(LEFT,CENTER);
    fill(255);
    text("[Test Movement] Mouse: X="+str(this.x)+", Y="+str(this.y)+" => Dest: X="+str(this.destx)+", Y="+str(this.desty),0,814);
  }
}
