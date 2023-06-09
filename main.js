mtX=0;
mtY=0;

function preload(){

    Mt=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('POseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mtX=results[0].pose.nose.x-18;
        mtY=results[0].pose.nose.y+6;

        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        
    }
}
function draw(){
    image(video,0,0,300,300);
    image(Mt,mtX,mtY,40,40);

}

function take_snapshot(){
    save('myFilterImage.png');
}