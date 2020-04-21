import {Profile} from "@/models/Profile";

export class School {
    id: number;
    schoolName: string;
    schoolAddress: string;
    director: Profile

    constructor(id: number, schoolName: string, schoolAddress: string, director: Profile){
        this.id = id
        this.schoolName = schoolName
        this.schoolAddress = schoolAddress;
        this.director = director;
    }

    static placeholder(): School{
        return new School(-1,'', '', Profile.placeholder());
    }

    static fromResponse(response: any): School{
        return new School(response.id, response.schoolName, response.schoolAddress, Profile.fromResponse(response.director))
    }
}