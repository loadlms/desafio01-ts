import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  loan: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    this.loan = value
    let loan = this.loan
    
    if(this.validateStatus()){
      this.loan = value
      console.log('Você pegou um empréstimo de:',loan)
    }
  }
}