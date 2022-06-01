var arr[];
var pos;
var testPos;
var endPos; //last position needed to be tested


function setup() {
  createCanvas(400, 400);
  background(0);
  arr = randomArray(10);

  pos = 0;
  testPos = pos + 1;
  endPos = arr.length - 1;
}

function draw() {
  background(0);
  
  if (endPos==0) {
    displayArray(arr, -1, -1, -1);
  }
  else {
    displayArray(arr, pos, testPos, endPos);
    if (arr[pos]>arr[testPos]) {
      swap(arr, pos, testPos);
    } else {
      pos++;
      testPos++;
    }
    
    if (pos==endPos) {
      pos=0;
      testPos=1;
      endPos--;
    }
  }
}

int[] randomArray(int num) {
  int[] values = new int[num];

  for (int i=0; i<values.length; i++) {
    values[i] = int(random(100, 400));
  }//random value loop
  return values;
}//randomArray

void displayArray(int[] arr, int p, int tp, int sp) {
  int barWidth = width / arr.length;
  int x = 0;
  int y = 0;
  noStroke();
  for (int i=0; i<arr.length; i++) {
    y = height - arr[i];
    if (i == p ) {
      fill(230, 0, 230);
    }
    else if (i == tp) {
      fill(0, 230, 230);
    }
    else if (i == sp) {
      fill(230, 230, 0);
    }
    else {
      fill(255);
    }
    rect(x, y, barWidth, arr[i]);
    x+= barWidth;
  }
}//displayArray
