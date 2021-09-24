// Your code here

//returns an array with all the values made negative
function mapToNegativize(sourceArray) {
    let negativizedArray = []
    sourceArray.forEach(num => negativizedArray.push(num * -1));
    return negativizedArray;
};

// returns an array with the original values

function mapToNoChange(sourceArray){
    return sourceArray
};
function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(function(num){
        return num * 2
    });
    return newArray

};

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(function(num){
        return num ** 2
    });
    return newArray

};

//function reduceToTotal(sourceArray){
  //  let newArray = sourceArray.reduce(function(previousValue, currentValue){
    //    return previousValue + currentValue
    //}, 0)
    //return newArray

//};

//function reduceToAllTrue(sourceArray){
  //  let newArray = sourceArray.reduce(function(previousValue, currentValue, initialValue=0){
    //    let value = previousValue + currentValue
      //  if (value = true){
        //return value
        //}
    //})
    //return newArray
//};
function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (const num of sourceArray){
        total += num;
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    let trueVar = true;
    for (const num of sourceArray) {
        trueVar = (trueVar === !!num)
    };
    return trueVar
};

function reduceToAnyTrue(sourceArray) {
    for (const num of sourceArray) {
        if (!!num) {
            return true
        }
    };
    return false;
};


