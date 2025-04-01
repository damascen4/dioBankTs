import { ACCOUNT_TYPE } from "../enums/accountTypesEnum";
import { CoporativeAccount } from "./CorporativeAccount";
import { DioAccount } from "./DioAccount";
import { EnhancedAccount } from "./EnhancedAccount";
import { PersonalAccount } from "./PersonalAccount";

export class User {
    private readonly name: string
    private account: PersonalAccount | CoporativeAccount | undefined



    constructor (name: string) {
        this.name = name;
    }

    openAccount = (accountType: ACCOUNT_TYPE) : void => {
        if( this.account ) {
            console.log("Account already exists ")
        }
        else if(accountType === ACCOUNT_TYPE.CORPORATIVE_ACCOUNT){
            this.account = new CoporativeAccount(this)
            console.log("You current opened a corporative accout.")
        } 
        else if(accountType === ACCOUNT_TYPE.PERSONAL_ACCOUT){
            this.account = new PersonalAccount(this)
            console.log("You current opened a personal account.")
        } else {
            this.account = new EnhancedAccount(this)
            console.log("You current opened a enhanced account.")
        }
    }

    getAccount = () : PersonalAccount | CoporativeAccount | EnhancedAccount | undefined => {
        return this.account
    }

}