import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leonardo', 10)
peopleAccount.deposit(470)
peopleAccount.withdraw(50)
console.log(peopleAccount)



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.getLoan(5000)
console.log(companyAccount)


const otherAccount: OtherAccount = new OtherAccount ('Arthur', 15)
otherAccount.deposit(50)
console.log(otherAccount)
