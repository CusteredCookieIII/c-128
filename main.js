song="";

function preload()
{
    song1 = loadSound("peaches.mp3");
    song2 = loadSound("My_shot.mp3")
}

rightWristX = 0;
rightWristy = 0;

leftWristX = 0;
leftWristY = 0;


function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initalized');
}

function gotPoses(results)
{
    if(results.lenth > 0)
    {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY)

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + LeftWristX +" LeftWristY = " + leftWristY)

    }
}

function draw(){
    image(video,0,0,600,500);

}

function play()
{
    song1.play();
    song1.setVoume(1);
    song1.rate(1);

    song2.play();
    song2.setVoume(1);
    song2.rate(1);
}