noseX=0;
noseY=0;

function preload() {
   Bigote = loadImage('45aa4ad3adc66e092edcacd8614cac5a-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
    console.log('PoseNet está inicializado');
 }

 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x -35;
        noseY = results[0].pose.nose.y -15;
    }
 }

 function draw() {
    image(video, 0, 0, 300, 300);
    image(Bigote, noseX, noseY, 80, 80);

}

function take_snapshot(){
 save('Foto-Filtro.png')
}

