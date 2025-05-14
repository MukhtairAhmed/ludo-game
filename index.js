var store = ["dice-01.svg","dice-02.svg","dice-03.svg","dice-04.svg","dice-05.svg","dice-06.svg"];

function add(){
var rand_img= document.getElementById("dell");
var chan_img = store[Math.floor(Math.random()*6)];
rand_img.setAttribute("src",chan_img);
}
var stores = ["dice-01.svg","dice-02.svg","dice-03.svg","dice-04.svg","dice-05.svg","dice-06.svg"];

function aid(){
    var randommgbx = document.getElementById("random_imgbx");
    var next_img = store[Math.floor(Math.random()*6)];
    randommgbx.setAttribute("src",next_img);
    console.log(nowller)

}

