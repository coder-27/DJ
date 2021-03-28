song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;
leftX = 0;
leftY = 0;

rightWristX = 0;
rightWristY = 0;
rightX = 0;
rightY = 0;

scoreleftWrist = 0;
scorerightWrist = 0;
song1_name = "Raabta";
song2_name = "Harry Potter Theme Song";

function preload(){
    song1 = loadSound("raabta.mp3");
    song2 = loadSound("harry.mp3");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log('PoseNet is Initialized!');
}



function draw()
{
    image(video, 0, 0, 600, 450);
    fill('#FF0000');
    stroke('#FF0000');
}
function gotPoses(results)
{
    if (results.length > 0)
    {

        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("the value of scoreRightWrist is " +scoreRightWrist+ "and the value of scoreLeftWrist is " + scoreleftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("the value of leftWristX is " + leftWristX + "and the value of leftWristY is " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("the value of rightWristX is " + rightWristX + "and the value of rightWristY is " + rightWristY);
     }
    }