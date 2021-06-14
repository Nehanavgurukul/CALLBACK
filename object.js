var ob1 = { "a" : 300 , "b" : 600 , "c" : 200 , "d" : 400}
var ob2 = {"a" : 200 , "c" : 400 , "e" : 700 , "d" : 100}

// for (var x = 0 ; x < ob1.length ; x++){
//     console.log(ob1.x)
// }
console.log(ob2)
var ob3 = {}
for( x in ob1 ){
    for (y in ob2){
        if (x == y){
            var sum = ob1[x]+ob2[x]
            ob3[x] = sum;
            console.log(ob3)
        }else{
            ob3[x] = ob1[x];
            ob3[y] = ob2[y];
        }
    }
}
console.log(ob3)
