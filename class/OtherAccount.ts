import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
    constructor(name: string, accountNumber:number){
        super(name, accountNumber);
    }

    deposit = (value:number) : void =>{
        let balance = this.balance
        if(this.validateStatus()){
            console.log("Deposito de",value);
            this.setBalance((balance += (value+10)))
          }
        }
    }