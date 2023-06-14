let box1 = document.getElementById("check1")
let box2 = document.getElementById("check2")

box1.addEventListener( "change", function(){
    if (box2.checked){
        box2.checked = false;
    }
});
box2.addEventListener( "change", function(){
    if (box1.checked){
        box1.checked = false
    }
})