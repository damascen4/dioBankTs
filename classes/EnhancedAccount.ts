import { ACCOUNT_TYPE } from "../enums/accountTypesEnum";
import { DioAccount } from "./DioAccount";
import { User } from "./User";

export class EnhancedAccount extends DioAccount {
    constructor(user: User) {
        super(user)
        this.setAccountType(ACCOUNT_TYPE.ENHANCED_ACCOUNT)
    }
    
    deposit = ( value:number ) : void => {
        value+=10
        if(this.validateAccount()){  
            console.log(`Your new balance is ${this.accountBalance += value}`)
        }
    }


}