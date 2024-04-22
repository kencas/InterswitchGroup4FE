import * as db from './dbDemo'
import * as mail from './mail'

// export const applyDiscount = (order) =>{
//     const customer = db.getCustomer(order.customerId)

//     if(customer.point > 10){
//         order.totalPrice *= 0.9
//     }
// }

export const notifyCustomer = (order) =>{

 const customer = db.getCustomer(order.customerId)
 mail.send(customer.email, 'Your order was placed successfully!!!')
}