const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

/*
PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
*/
//Solution:

var result={}

function getUniqueProductCount(arr){

    for(var i=0;i<arr.length;i++){
        if(!result[arr[i].productName]){
            result[arr[i].productName]=1
        }else{
            result[arr[i].productName]+=1
        }
    }
}

getUniqueProductCount(listOfProducts)
console.log(result)



/*
2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

//Solution:

var resArr=[]
const objEqual=(a,b)=>a.productName==b.productName

function getUniqueProduct(arr){
   arr.forEach(item=>{
    const itemResult=resArr.find(resItem=>objEqual(item,resItem))
       if(!itemResult){
        resArr.push(item)
       }else{
      const Index=resArr.findIndex((item=>item.productName==itemResult.productName))
      resArr[Index].quantity+=itemResult.quantity
    
       }

   })

}

getUniqueProduct(listOfProducts)

console.log(resArr)