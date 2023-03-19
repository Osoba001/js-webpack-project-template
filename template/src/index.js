import './styles/index.css'
import {styleBody, addTitle, contact} from './dom'
import {getPremiumUser, users} from './data'

console.log(users)
const premiumusers=getPremiumUser(users)
console.log(contact)
const greet=name=>{
    console.log(name)
}

greet('Kelly')
greet('Peter')
greet('Paul')