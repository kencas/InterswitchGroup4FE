// export const absolute = (number) =>{
//  if(number > 0) return number;
//  if(number < 0) return -number;
//  return 0
// }

// export const greet = (name) =>{
//     return 'Welcome ' + name + '!'
// }

// export const getCurrencies = () =>{
//     return  ['USD', 'GDP', 'EUR']
    
// }

// export const getProduct = (productId)=>{
//     return {id : productId, price : 10, name:'tea'}
// }

// export const registeredUser = (username) =>{
//     if(!username) throw new Error ('username must be entered')

//     return {id : new Date().getTime(), user : username}
// }





export const fizzbuzz = (input) =>{
    if(typeof input !== 'number') throw new Error('input must be a number')

    if((input % 3 === 0 ) && (input % 5 === 0) ){
        return 'FizzBuzz'
    }
    if(input % 3 === 0){
        return 'Fizz'
    }
    if(input % 5 === 0 ){
        return 'Buzz'
    }
    return input
}