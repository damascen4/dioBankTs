# dioBankTs
This project is to implement OOP using TS, where the concepts of inheritance and polymorphism were applied to simulate a 'banking system'.

### Tecnologies
- Typescript

### Run

1 - Clone the repo

2 - Install dependencies
    
    npm install

3 - Run project

    npm run dev

#### Challenges
- [x] Implement the deposit and withdraw methods in the DioAccount class
The balance values should be adjusted according to the deposit amount
Only accounts with a true status and a balance greater than the requested withdrawal amount can withdraw

- [x] Implement the getLoan method in the CompanyAccount class
The balance values should be increased according to the loan amount
Only accounts with a true status can take out a loan

- [x] Create a new type of account based on DioAccount
This account should not receive new attributes
This account will have a deposit method that adds 10 more to the deposit amount. (For example: A deposit of 100 will result in 110 after the operation)

- [x] All attributes of any account should be private
- [x] The name and accountNumber attributes should not be altered internally or externally
- [x] Create instances for each type of account in app.ts and execute the possible methods.

