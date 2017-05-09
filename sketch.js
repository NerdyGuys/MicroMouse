var TheMaze = [];
var MazeSize = 16;
var SquareSize = 50;
var MazeColor;

var TheMouse;
var MouseColor;
var MouseWidth = 0.8*SquareSize;
var MouseHeight = 0.8*SquareSize;

var WallSize = 4;
var OffSet;
var WallColor;
var Walls= [];

var moveX = 0;
var moveY = 0;

var win = false;

function setup() {
  createCanvas(804,824);
  OffSet = WallSize/2;
  MazeColor = color(220,220,220);
  WallColor = color(255,0,0);
  //LoadWall("./mazes/a.txt");
  for (var y = 0; y < MazeSize; y++){
    TheMaze[y]=[];
    for (var x = 0; x < MazeSize; x++){
      TheMaze[y][x] = new Maze();
      TheMaze[y][x].x = x;
      TheMaze[y][x].y = y;
      //TheMaze[y][x].North = Walls[y][x][0];
      //TheMaze[y][x].East = Walls[y][x][1];
      //TheMaze[y][x].South = Walls[y][x][2];
      //TheMaze[y][x].West = Walls[y][x][3];
    }
  }
  var selectmatrix = ListofMatrices[Math.floor(Math.random()*ListofMatrices.length)];
  loadStrings("http://www.dangnamkhanh.com/MicroMouse/mazes/"+selectmatrix, LoadWall);
  console.log(TheMaze);
  MouseColor = color(255,0,0,123);
  TheMouse = new Mouse();

}

function draw() {
  background(0);
  frameRate(30);
  for (var x = 0; x < MazeSize; x++){
    for (var y = 0; y < MazeSize; y++){
      TheMaze[y][x].DrawSq();
    }
  }
  for (var x = 0; x < MazeSize; x++){
    for (var y = 0; y < MazeSize; y++){
      TheMaze[y][x].DrawWall();
    }
  } 
  TheMouse.Display();
  //TheMouse.XYMove();
  //
  TheMouse.StepMove(moveX, moveY);
  moveX = 0;
  moveY = 0;
  //CreateButtons();
  CheckWin();
}


function LoadWall(data){
  // HorizontalWall
  //var f =  new File([""],file);
  //f.open("r");
  //var str = "";
  //for (var row=MazeSize-1; row>=0; row--){
  for (var row=0; row<MazeSize; row++){
    //Walls[row] = [];
    for (var col=0; col<MazeSize; col++){
      //Walls[row][col] = [];
      //for (var i=0; i<4; i++){
	 s = (data[3+col*4+row*64]);
	 if (s=="1")
		TheMaze[row][col].North = true;
	 else
		TheMaze[row][col].North = false;
	 s = (data[0+col*4+row*64]);
	 if (s=="1")
		TheMaze[row][col].East = true;
	 else
		TheMaze[row][col].East = false;
	 s = (data[1+col*4+row*64]);
	 if (s=="1")
		TheMaze[row][col].South = true;
	 else
		TheMaze[row][col].South = false;
	 s = (data[2+col*4+row*64]);
	 if (s=="1")
		TheMaze[row][col].West = true;
	 else
		TheMaze[row][col].West = false;
		//Walls[row][col][i] = false;
      //}
    }
  }
	console.log(data);
}

//function CreateButtons(){
  //noStroke();
  //fill(0);
  //rect(804,0,200,824);
  //stroke(0);
  //fill(255);
  //rect(820,20,160,160);
  //rect(820,200,160,160);
  //rect(820,380,160,160);
  //rect(820,560,160,160);
  //rect(820,740,160,70);
  //fill(0); 
  //textSize(35);
  //textAlign(CENTER,CENTER);    
  //text("UP",900,100); 
  //text("DOWN",900,280); 
  //text("LEFT",900,460); 
  //text("RIGHT",900,640); 
  //text("RESET",900,775); 
/*} */

function CheckWin() {
  if ((TheMouse.x == MazeSize/2 || TheMouse.x == MazeSize/2-1)&&(TheMouse.y == MazeSize/2 || TheMouse.y == MazeSize/2-1)){
    win = true;
  }
  if (win) {
    noStroke();
    fill(255,255,255,183);
    rect(0,0,width,height);
    textSize(85);
    textAlign(CENTER,CENTER);      
    fill(255,0,0);
    text("YOU WIN!",width/2,height/2);
  }
}

function mousePressed() {
  if (mouseX > 820 && mouseX < 980) {
    if (mouseY > 20 && mouseY < 180) {
      moveX = 0;
      moveY = -1;
      print("UP");
    } else if (mouseY > 200 && mouseY < 360) {
      moveX = 0;
      moveY = 1;
      print("DOWN");
    }  else if (mouseY > 380 && mouseY < 540) {
      moveX = -1;
      moveY = 0;
      print("LEFT");
    }  else if (mouseY > 560 && mouseY < 720) {
      moveX = 1;
      moveY = 0;
      print("RIGHT");
    }  else if (mouseY > 740 && mouseY < 810) {
      TheMouse.x = 0;
      TheMouse.y = 0;
      moveX = 0;
      moveY = 0;
    }      
  } else {
    moveX = 0;
    moveY = 0;
  }
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    moveX = 0;
    moveY = -1;
    print("UP");
  } else if (keyCode === DOWN_ARROW) {
    moveX = 0;
    moveY = 1;
    print("DOWN");
  } else if (keyCode === LEFT_ARROW) {
    moveX = -1;
    moveY = 0;
    print("LEFT");
  } else if (keyCode === RIGHT_ARROW) {
    moveX = 1;
    moveY = 0;
    print("RIGHT");
  } else if (keyCode === ESCAPE) {
    TheMouse.x = 0;
    TheMouse.y = 0;
    moveX = 0;
    moveY = 0;
  }              
}
