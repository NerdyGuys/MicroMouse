function Mouse() {
  this.x = 0;
  this.y = 0;
  
  this.Display = function () {
    fill(MouseColor);
    stroke(0);
    strokeWeight(1);
    ellipse((this.x+0.5)*SquareSize,(this.y+0.5)*SquareSize,MouseWidth,MouseHeight);
  }
}