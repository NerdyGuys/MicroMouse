var TheMaze = [];
var MazeSize = 16;
var SquareSize = 50;
var MazeColor;


var TheMouse;
var MouseColor;
var MouseWidth = 30;
var MouseHeight = 40;

var WallSize = 4;
var OffSet;
var WallColor;
var VerticalWall = [];
var HorizontalWall = [];

function setup() {
  createCanvas(804,824);
  OffSet = WallSize/2;
  MazeColor = color(220,220,220);
  WallColor = color(255,0,0);
  CreateWall();
  for (var y = 0; y < MazeSize; y++){
    TheMaze[y]=[];
    for (var x = 0; x < MazeSize; x++){
      TheMaze[y][x] = new Maze();
      TheMaze[y][x].x = x;
      TheMaze[y][x].y = y;
      TheMaze[y][x].North = HorizontalWall[y][x];
      TheMaze[y][x].East = VerticalWall[y][x+1];
      TheMaze[y][x].South = HorizontalWall[y+1][x];
      TheMaze[y][x].West = VerticalWall[y][x];
      
    }
  }
  MouseColor = color(255,0,0,123);
  TheMouse = new Mouse();
}

function draw() {
  background(0);
  frameRate(1);
  for (var x = 0; x < MazeSize; x++){
    for (var y = 0; y < MazeSize; y++){
      TheMaze[x][y].DrawSq();
    }
  }
  for (var x = 0; x < MazeSize; x++){
    for (var y = 0; y < MazeSize; y++){
      TheMaze[x][y].DrawWall();
    }
  } 
  TheMouse.Display();
  TheMouse.Move();
}


function CreateWall(){
  // HorizontalWall
  for (var row=0; row<MazeSize+1; row++){
    HorizontalWall[row] = [];
    for (var col=0; col<MazeSize; col++){
      if (random(5) < 2) HorizontalWall[row][col] = true;
      else HorizontalWall[row][col] = false;
    }
  }
  //VerticalWall
  for (var row=0; row<MazeSize; row++){
    VerticalWall[row] = [];
    for (var col=0; col<MazeSize+1; col++){
      if (random(5) < 2) VerticalWall[row][col] = true;
      else VerticalWall[row][col] = false;
      //print(VerticalWall[row][col]);
    }
  }
}
