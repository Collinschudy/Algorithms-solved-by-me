// counting the number of stair climbed after s years.
function stairsIn20(s) {
   
   let  stairs = [
    sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
        7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
        5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
        6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],

     monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
        6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
        5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
        7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],

     tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
            7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
            7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
            5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],

    wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
            5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
            5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
            9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
    
    thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
            9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
            9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
            7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],

    friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
            6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
            9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
            5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],

    saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
            5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
            5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
            7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085]
        ]
let stairCount = 0;
for (let i = 0; i < stairs.length; i++){
    for(let j = 0; j < stairs[i].length; j++){
    stairCount += stairs[i][j]; 
}    
}
return stairCount * s;
}
console.log(stairsIn20(1))
// ------------end-------------


// Checking for a strong number
function strong(n) {
        let numArr = String(n).split('').map((k) => {
          return Number(k)
        })
        let newNum = numArr;
        
      let answer = 0;
        for (let i of newNum) {
          function factorial(i) {
            if (i == 0 || i == 1) {
              return 1;
      
            } else {
              return i * factorial(i - 1);
            }
            
          }
          answer += factorial(i);
        
        }  
        if (answer === n){
          return 'Strong'
        }
        else {return 'not strong'}
      }
      console.log(strong(2));
// ------------end-------------



//      Equitable distribution of income in a marxist state.
function redistributeWealth(wealth) {
        let wealthArray = 0;
          for (let i of wealth){
            wealthArray += i;
            
          }
          
          let newWealth = wealthArray / wealth.length;
          let newArr = Array(wealth.length).fill(newWealth);
          return newArr;
        
          }
        
        console.log(redistributeWealth([2, 5, 6, 5, 188]))
       // ------------end-------------



        // A function that takes a string and returns the index value of each string
function alphabetPosition(text) {
        let alphaNum = 'abcdefghijklmnopqrstuvwxyz';
        let regEx = /^[a-z]$/;
    
        let wordSplit = text.toLowerCase().split('');
        let output = [];
        for (let i = 0; i < wordSplit.length; i++) {
           if (!regEx.test(wordSplit[i])) {
                output.push();
            } else {
                output.push(alphaNum.indexOf(wordSplit[i]) +1);
            }
        }
        return output.join(' ');
    }
    
    let answer = alphabetPosition('The sunset sets at twelve o\'clock.');
    console.log(answer);



    //  OR

    
   function alphabetPosition(text) {
    let alphaNum = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    
    }
    let wordSplit = text.toLowerCase().split('');
    let output = [];
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] in alphaNum === false) {
            output.push();
        } else {
            output.push(alphaNum[wordSplit[i]]);
        }
    }
    return output.join(' ');
   }


// ------------end-------------


// A function that tells you how many people that likes your work on a social media 
function likes(names) {
  let output = '';
  let name = names;

  if(name.length === 0){

      output += 'no one likes this';
  }else if (name.length === 1){
      output += `${name} likes this`;
  }else if (name.length === 2){
      output += `${name[0]} and ${name[1]} like this`;
  }else if (name.length === 3){
      output += `${name[0]}, ${name[1]} and ${name[2]} like this`;
  }else if (name.length > 3){
      output += `${name[0]}, ${names[1]} and ${names.length-2} others like this`;
  }

  return output;
}

let ans = likes(['chuka', 'azu', 'kene', 'Ezekiel', 'Thompson', 'Gabriel']);
console.log(ans);
// ------------end-------------


// A function that takes two strings and proceeds to sort and concatenate them returning each element once
function longest(s1, s2) {
 
  let newWord = s1.concat(s2);
  let wordSplit = newWord.split('');
  let wordSort = wordSplit.sort();
  let wordfilter = wordSort.filter((word, pos) => wordSort.indexOf(word) === pos);

  return wordfilter.join('')
}

  let newWordd = longest('cat', 'lion');
  console.log(newWordd);
// ------------end-------------



// The highest profit wins!
function minMax(arr){
  
        if (arr.length === 1){
        return Array(2).fill(arr[0]);  
        }
        else{
          arr.sort(function(a, b){return a - b});
          let profitArray = [];
        profitArray.push(arr[0]);
        profitArray.push(arr[arr.length -1]);
        return profitArray;
        }
      }
      
      
      console.log(minMax([2]))
      // ------------end-------------


// Beginner Series #3 Sum of Numbers

      function getSum(a, b) {
        if (a === b) {
          return a;
        } else {
          let myArr = [];
          myArr.push(a, b);
      
          myArr.sort(function (a, b) { return a - b });
          function mySum(myArr) {
            let sum = 0;
            for (let i = myArr[1]; i >= myArr[0]; i--) {
              sum += i;
            }
            return sum;
          }
         return mySum(myArr);
        }
      }
      console.log(getSum(2, -1));
  // ------------end-------------
      
// Sum of digits/ digital root ie the sum of the digits of a number
  function digital_root(n) {
    let numSplit = n.toString().split('').map((k) => {
      return Number(k)
    })
   
    let reducedNum = [];
    if (numSplit.length == 1 || n < 0) {
      return n;
    }else {
      reducedNum += numSplit.reduce(func);
      function func(sum, num) {
        return sum + num;
      }
      let secondNum = reducedNum.split('').map((p) => {
        return Number(p)
      })    
      if (secondNum.length === 1) {
        return Number(secondNum.join(''));
      } else {
        for (let i = 0; i < secondNum.length; i++) {
  
          let thirdNum = func(secondNum[i], secondNum[i + 1]);
         
          let thirdSplit = thirdNum.toString().split('').map((y) => {
            return Number(y)
          })
          if (thirdSplit.length === 1){
            return thirdNum;
          }else{
            let thirdSum = 0;
            for (let j = 0; j < thirdSplit.length; j++) {
              thirdSum += thirdSplit[j];   
            }
            return thirdSum; 
          }
        }
      }
    }
  }

  // the proper solution is below
function digital_root(n) {
  let numSplit = n.toString().split('').map((k) => {
    return Number(k)
  })
  let sum = 0;
if (numSplit.length === 1){
return n;
}else{
for (let i = 0; i < numSplit.length; i++){
  sum += numSplit[i]; 
}
}
return digital_root(sum);
}
console.log(digital_root(49))

//palindromic words

function palind(words){
  let wordRev = words.split(' ')
  let singleWord;
  let longestWord = '';
  let wordArr = [];
  for (let i = 0; i < wordRev.length;i++){
    singleWord = wordRev[i].split('').reverse().join('')
    if (singleWord.length < 2){
      continue
    }
    else if (singleWord===wordRev[i]){
      wordArr.push(wordRev[i])
    }
  }
  for (let j = 0; j < wordArr.length; j++){
    if (wordArr[j].length > longestWord.length){
     longestWord = wordArr[j]
    }
  }
  return 'The longest palindromic word in the string is ' + longestWord + ' and the length is '+ longestWord.length
 

}
console.log(palind('my eye is the portal to which i peep'))





  

// Convert an array of strings to array of numbers

function stringToNum(strArr){
  let newArr = strArr.map((p) => {
    return Number(p)
  })
  return newArr
  
}

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


function explode(arr) {
  let score;
  let row = []
  for (let j = 0; j < arr.length; j++) {
    if (typeof arr[0] == 'number' && typeof arr[1] == 'number') {
      score = arr[0] + arr[1];
    } else if (typeof arr[j] == 'number') {
      score = arr[j]
    }
    else if (typeof arr[0] != 'number' && typeof arr[1] != 'number') {
      return 'Void!'
    }
  }
  for (let i =0; i < score; i++){
      row.push(arr)  
      }
return row
}

// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let confirm = str.slice(str.length - target.length)
  console.log(confirm)
  return confirm === target;
}

confirmEnding("Bastian", "n");




// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
  let largestNumArr = [];
  for (let i = 0; i < arr.length; i++){
    // console.log(arr[i].sort(function(a, b){return b - a}))
    let newArr = arr[i].sort(function(a, b){return b - a})
    largestNumArr.push(newArr[0])
  }
  console.log(largestNumArr)
  return largestNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let newString = []
  let strsplit = str.split(' ')
  console.log(strsplit)
  for (let i = 0; i < strsplit.length; i++){
    let strr = strsplit[i]
    console.log(strr)
    let neww = strr.charAt(0).toUpperCase() + strr.slice(1).toLowerCase();
    
    newString.push(neww)
    // return neww
  }
  // let cap = str.charAt(0).toUpperCase() + str.slice(1)
  return newString.join(' ')
}

console.log(titleCase("i'm a little tea pot"));


// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the 
// sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sortedArr = arr.sort((a,b) => (a-b))
  let sum = 0
  for (let i = sortedArr[0]; i <= sortedArr[1];i++){
    sum+= i
  }
   return sum;
 }
 
 console.log(sumAll([1, 4]));