

function setup()
{
video = createCapture(VIDEO);
video.hide();
canvas = createCanvas(480,380);
canvas.position();
}   

function draw()
{
    image(video,0,0,480,380);
}


status = "";
video = "";

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
}

