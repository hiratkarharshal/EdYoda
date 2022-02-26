console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

console.log("************Q1 START ******************");
var a=[1,2,3,4,5,1,3]
var num=1
var resArr=[]
for(var i=0;i<a.length;i++){
    if(a[i]===num){ 
        resArr.push(i) 
    }
}
if(resArr.length===0){  
    console.log(-1);
}else if(resArr.length===1){  
    console.log(resArr[0]);
}else{  
    console.log(resArr);
}
console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
console.log("*************Q2 Start*****************");
var res='\n'
for(var i=0;i<=5;i++)
{
    for(var j=5;j>i;j--){ 
        res+=j 
    }
    res+='\n' 
}
 console.log(res)
console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
console.log("**********Q3 Start**************");
var Input=[3, 2, 1, 4, 5, 45]
for(var i=Input.length;i>=0;i--)
{
    for(var j=0;j<i;j++){
        if(Input[j]>Input[j+1])
        {
            var c=Input[j]
            Input[j]=Input[j+1]
            Input[j+1]=c
        }
    }
}
console.log(Input);

console.log("************Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
console.log("***********Q4 Start =====================")
var str1,str2
str1='LISTEN'
str2='SILENT'
console.log( (str1.split("").sort().join(""))===(str2.split("").sort().join("")) )

console.log("****************Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
console.log("*******************Q5 Start =====================")
var input='Hello'
var output=''
for(var i=input.length-1;i>=0;i--){
     output+=input[i] 
}
console.log(output)
console.log("Q5 END =====================")