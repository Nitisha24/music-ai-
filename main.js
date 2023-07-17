peter_pan_song="";

harry_potter_theme_song="";

rightWrist_x=0;

rightWrist_y=0;

leftWrist_x=0;

leftWrist_y=0;

scoreleftWrist=0;

song_name="";


function setup()
{
    canvas=createCanvas(600,530);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
    
}


function preload()
{
    peter_pan_song = loadSound("music2.mp3");

    harry_potter_theme_song =loadSound("music.mp3");
}


function draw()
{
    image(video,0,0,600,530);
fill("red");
stroke("red");
song_name=peter_pan_song.isPlaying();
console.log(song_name);
if(scoreleftWrist>0.2)
{
    circle(leftWrist_x, leftWrist_y,20);
    harry_potter_theme_song.stop();
    if(song_name==false)

{
    peter_pan_song.play();

}
else{
    console.log("songname:peterpansong");
    document.getElementById("song_id").innerHTML="song name:peter pan song";

}

}

}

function modelLoaded()
{
    console.log("posenet is initialized");

}

function gotposes(results)
{

    if(results.length > 0)
    {
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log(scoreleftwrist);
        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;
        console.log('leftwrist_x ='+ leftWrist_x +"leftwrist_y =" + leftWrist_y);
        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log('rightwrist_x ='+ rightWrist_x +"rightwrist_y =" + rightWrist_y);
    }
}




