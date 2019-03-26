

funciton Repeat(fn, n){
    for(i=0;i<n;i++){
        fn();
    }
return ;
}

function hello(){
    console.log('Hello world');
}

function goodbye(){
    console.log('Goodbye world');
}

Repeat(hello, 5);
Repeat(goodbye, 5);
