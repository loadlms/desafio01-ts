export abstract class DioAccount {
    private name: string
    private accountNumber: number
    balance: number = 0
  
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (value: number): void => {
      let balance = this.balance;
      if(this.validateStatus()){
        console.log("Deposito de",value);
        this.setBalance((balance += value))
      }
    }
  
    setBalance = (value: number): void => {
      this.balance = value;
      console.log("Saldo alterado, seu novo saldo é", this.balance)
    }
  
    withdraw = (value: number): void => {
      let balance = this.balance
      if(this.validateStatus() && balance > value){
        this.setBalance((balance -= value))
        console.log(`Você sacou ${value}, Seu novo saldo é ${balance}`);
      }
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }
  
    validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }