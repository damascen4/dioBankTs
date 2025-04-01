import { ACCOUNT_TYPE } from "../enums/accountTypesEnum";
import { DioAccount } from "./DioAccount";
import { User } from "./User";

export class PersonalAccount extends DioAccount {

    constructor(user: User) {
        super(user)
        this.setAccountType(ACCOUNT_TYPE.PERSONAL_ACCOUT)
    }
}