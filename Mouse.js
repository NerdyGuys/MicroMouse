function Mouse() {
  this.x = 0;
  this.y = 0;
  this.speed = 0.2;
  this.destx = int(random(MazeSize));
  this.desty = int(random(MazeSize));
  
  this.Move = function() {
    if (floor(this.x) < this.destx) {
      this.x+=this.speed;
    } else if (floor(this.x) > this.destx) {
      this.x-=this.speed;
    } else if (floor(this.y) < this.desty) {
      this.x = floor(this.x);
      this.y+=this.speed;
    } else if (floor(this.y) > this.desty) {
      this.x = floor(this.x);
      this.y-=this.speed; 
    } else {
      this.x = floor(this.x);
      this.y = floor(this.y);
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
