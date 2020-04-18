export class Account {
    accountId: number;
    fullName: string;
    email: string;

    constructor(accountId: number, fullName: string, email: string){
        this.accountId = accountId
        this.fullName = fullName
        this.email = email;
    }

    static placeholder(): Account{
        return new Account(-1,'', '');
    }

    static fromResponse(response: any): Account{
        return new Account(response.accountId, response.fullName, response.email)
    }
}