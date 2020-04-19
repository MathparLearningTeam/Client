export class School {
    id: number;
    schoolName: string;
    schoolAddress: string;

    constructor(id: number, schoolName: string, schoolAddress: string){
        this.id = id
        this.schoolName = schoolName
        this.schoolAddress = schoolAddress;
    }

    static placeholder(): School{
        return new School(-1,'', '');
    }

    static fromResponse(response: any): School{
        return new School(response.id, response.schoolName, response.schoolAddress)
    }
}