function Mouse() {
  this.x = 0;
  this.y = 0;
  this.speed = 0.05;
  this.destx = int(random(MazeSize));
  this.desty = int(random(MazeSize));
  
  this.Move = function() {
    var dx = this.destx - this.x;
    var dy =  this.desty - this.y;
    if (dx > 0.02) {
      this.x+=this.speed*dx;
   } else if (dy > 0.02) {
      this.y+=this.speed*dy; 
      this.x = this.destx;
    } else {
      this.x = this.destx;
      this.y = this.desty;
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
