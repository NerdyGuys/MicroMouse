var TheMaze = [];
var MazeSize = 16;
var SquareSize = 50;
var MazeColor;

var TheMouse;
var MouseColor;
var MouseWidth = 30;
var MouseHeight = 40;
function setup() {
  createCanvas(800,800);
  MazeColor = color(220,220,220);
  for (var x = 0; x < MazeSize; x++){
    TheMaze[x]=[];
    for (var y = 0; y < MazeSize; y++){
      TheMaze[x][y] = new Maze();
      TheMaze[x][y].x = x;
      TheMaze[x][y].y = y;
      
    }
  }
  MouseColor = color(255,0,0,123);
  TheMouse = new Mouse();
}

function draw() {
  for (var x = 0; x < MazeSize; x++){
    for (var y = 0; y < MazeSize; y++){
      TheMaze[x][y].Display();
    }
  }
  TheMouse.Display();
}