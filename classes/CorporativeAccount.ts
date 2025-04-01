import { ACCOUNT_TYPE } from "../enums/accountTypesEnum";
import { DioAccount } from "./DioAccount";
import { User } from "./User";

export class CoporativeAccount extends DioAccount {
    constructor(user: User) {
        super(user)
        this.setAccountType(ACCOUNT_TYPE.CORPORATIVE_ACCOUNT)
    }
    
    public getLoan = ( value:number ): void => {
        this.deposit(value)
    }


}