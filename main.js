function setup(){
    Canvas = createCanvas( 500 , 400 );
    Canvas.position(100,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video,100,80,300,250);
    stroke("red");
    fill("red");
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    fill("green");
    stroke("green");
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
    tint(tint_color);
}

function take_snapshot(){
    save('TintColourBackgroundImg.png');
}

function apply_filter(){
    tint_color= document.getElementById("color_name").value;
}

