// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a1 = Array.isArray(a);
b1 = Array.isArray(b);
console.log(a+' Is it an array? '+a1);
console.log(b+' Is it an array? '+b1);

// Write a program that multiplies each entry in the following array by 2。
var arrayOutput = '[';
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let index=0; index<a.length; index++){
    a[index]=a[index]*2;
    if (index < a.length - 1){
    	arrayOutput+=a[index]+=',';
    }
    else{
    arrayOutput+=a[index]+=']';	
    }
}
console.log(arrayOutput);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var caseOutput ='';
for(let i=0; i<colors.length; i++)
{
	caseOutput+=colors[i];
	if(i<colors.length-1){
		caseOutput+=' ';
	}
}
console.log('case 1 output: '+ caseOutput);
    caseOutput=caseOutput.replaceAll(' ', '+');
console.log('case 2 output: '+caseOutput);
    caseOutput=caseOutput.replaceAll('+', ',');
console.log('case 2 output: '+caseOutput);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a,b) => b-a));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 2, 9, 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let counter1 = 1, counter2 = 0, frequentLetter;
for (let x=0; x<a.length; x++)
{
    for (let y=x; y<a.length; y++)
    {
        if (a[x] == a[y])
         counter2++;
        if (counter1<counter2)
        {
          counter1=counter2;
        }
        frequentLetter = a[x];
    }
    counter2=0;
}
console.log(frequentLetter);