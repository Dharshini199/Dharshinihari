var arr= [10,20,30];
var arr1=[...arr, 40,50,60];
console.log(arr);
console.log(arr1)// spread function 

var marks=[100,89,98,96,97];
var[m1,m2,m3,m4,m5] = marks;
console.log(m1,m2,m3,m4,m5) // destructing operator 

//call back function
function demo(){
    console.log("Hello from demo");
}
const callback =(callbackfun) =>{
    console.log("Hello from call back");
    callbackfun();

}
callback (demo)

var name = "dharshu";
console.log(`welcome, ${name}`);  //backticks


// map-accept a function return new array 
function addone(n){
    return n*2;
}
let array=[1,2,3,4,5];
let mappedarr=array.map((i)=>{return i*2})
console.log(array);
console.log(mappedarr);

//filter-return a new array based on the condition 
const filteredarray=array.filter((i)=>{return i%2==0});
console.log(filteredarray);

//REDUCE-accept two parameters(accumulate value,current value) and
// return single value based on the function
const reducedArray =array.reduce((sum,current)=>{return sum+current},0);
console.log(reducedArray);

const getdata=async()=>{
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const users =await response.json ()
    console.log(users);

    }
catch(error){
        console.log(`Error: ${error}`);        
    }
}
getData()






