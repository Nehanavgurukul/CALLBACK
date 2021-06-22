function m(){
    console.log("hello")
}
function n(a){
    console.log("hii")
    a();
    // console.log("bye")
}
n(m)