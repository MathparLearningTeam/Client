export class Profile {
    accountId: number;
    profileId: number;
    creationDate: Date;
    profileName: string;
    role: string;

    constructor(accountId: number, profileId: number, creationDate: Date, profileName: string, role: string){
        this.accountId = accountId;
        this.profileId = profileId;
        this.creationDate = creationDate;
        this.profileName = profileName;
        this.role = role;
    }

    static placeholder(): Profile{
        return new Profile(-1, -1, new Date(0), '', '');
    }

    static fromResponse(response: any): Profile{
        return new Profile(response.accountId, response.profileId, response.creationDate, response.profileName, response.role)
    }
}