import { CoporativeAccount } from './classes/CorporativeAccount';
import { EnhancedAccount } from './classes/EnhancedAccount';
import { PersonalAccount } from './classes/PersonalAccount';
import { User } from "./classes/User";
import { ACCOUNT_TYPE } from "./enums/accountTypesEnum";


const m: User = new User("Matheus")
const a: User = new User("Amanda")
const e: User = new User("Gerente")
m.openAccount(ACCOUNT_TYPE.PERSONAL_ACCOUT)
a.openAccount(ACCOUNT_TYPE.CORPORATIVE_ACCOUNT)
e.openAccount(ACCOUNT_TYPE.ENHANCED_ACCOUNT)

const mAccount = m.getAccount() as PersonalAccount
const aAccount = a.getAccount() as CoporativeAccount
const eAccount = e.getAccount() as EnhancedAccount

mAccount.activateAccount(200)
mAccount.withdraw(300)
mAccount.getAccountType()

aAccount.activateAccount(200)
aAccount.getLoan(100)
aAccount.getAccountType()

eAccount.activateAccount(200)
eAccount.deposit(100)
eAccount.getAccountType()
