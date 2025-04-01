import { ACCOUNT_TYPE } from './../enums/accountTypesEnum'
import { User } from "./User"

export abstract class DioAccount {
    private user: User 
    private accountType: ACCOUNT_TYPE | undefined
    private readonly accountNumber: number = ( Math.floor(Math.random() * 1000 ) + 1 )
    protected accountBalance: number = 0
    private status: boolean = false


    constructor(user: User){
        this.user = user
    }

    activateAccount = ( value: number = 200) => {
        if(this.minimalValueToActivate(value)) {
            this.accountBalance += value
            this.status = true
        }
    }

    setAccountType = ( type: ACCOUNT_TYPE ) : void => {
        this.accountType = type
    }

    getAccountType = () : void => {
        console.log(`Your account type is ${this.accountType}`)
    }

    getAccount = () : any => {
        return this.user.getAccount();
    }

    getBalance = () : number => {
        return this.accountBalance
    }
    
    getAccountNumber = () : number => {
        return this.accountNumber
    }

    deposit = ( value:number ) : void => {
        if(this.validateAccount()){  
            console.log(`Your new balance is ${this.accountBalance += value}`)
        }
    }
    
    withdraw = ( value:number ) : void => {
        (this.validateAccount() && this.haveBalance( value ))  ? 
            console.log(`Your new balance is ${this.accountBalance -= value}`) : 
            console.log("You don't have enough money.")
    }


    private haveBalance = ( value: number ) => {
        return this.accountBalance >= value ? true : false
    } 

    protected validateAccount = () : boolean => {
        if( this.status ) { 
            return true
        } 

        throw new Error("Invalid Account")
    }

    private minimalValueToActivate = ( value:number ) : boolean => {
        if(value < 200) {
            throw new Error("The value is very low, the initial deposit should be more than 200.")
        }
        return true
    }
}