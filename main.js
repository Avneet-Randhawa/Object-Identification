var img ="";
Status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modeloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects!!!";
}
function modeloaded(){
    console.log("Model Is Loaded!!!");
    Status = true;
    objectDetector.detect(img, got_results);
}

function got_results(error , results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}
function draw(){

    image(img,0,0,640,420);

    if(Status != ""){
        document.getElementById("status").innerHTML = "Status : Objects Detected"; 

        for(i = 0 ; i < objects.length ; i++){
        stroke("rgb(255,0,0)");
        noFill();
        textFont("cursive");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "  " + percent + "%", objects[i].x +15,objects[i].y +15);
        rect( objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

    // textFont("cursive");
    // image(img,0,0,640,420);
    // stroke("rgb(255,0,0)");
    // noFill();
    // text("Dog",45,75);
    // rect(30,60,450,350);

    // stroke("rgb(255,255,0)");
    // text("Cat",290,75);
    // rect(275,65,300,340);

    // stroke("rgb(255,0,255)");
    // noFill();
    // text("Bowl",290,330);
    // rect(285,315,120,87);
}