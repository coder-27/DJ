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

function draw(){
    image(video, 0, 0, 600, 450);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    if(scoreleftWrist>0.2)
    {
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        
        song2.pause();
        
        if(song1_status = false)
        {
            song1.play();
            document.getElementById("song").innerHTML = "Song = " + song1_name;
        }
    }

    if(scorerightWrist>0.2){
        song1.pause();

        if(song2_status = false){
            song2.play();
            document.getElementById("song").innerHTML = "Song = " + song2_name; 
        }
    }
}
    

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        
        console.log(results);
        scoreleftWrist = results[0].pose.keypoints[9].score;
        scorerightWrist = results[0].pose.keypoints[10].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        leftX = leftWristX.toFixed(3);
        leftY = leftWristY.toFixed(3);
        console.log("leftWristX = " + leftX + " Left Wrist Y = " + leftY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightX = rightWristX.toFixed(3);
        rightY = rightWristY.toFixed(3);
        console.log("Right Wrist X = " + rightX + " Right Wrist Y = " + rightY);
    }
}