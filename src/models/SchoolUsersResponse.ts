import {Profile} from "@/models/Profile";

export default class SchoolUsersResponse{
    director: Profile|null;
    headTeachers: [];
    teachers: [];
    students: [];

    constructor(director: Profile|null, headTeachers: [], teachers: [], students: []) {
        this.director = director;
        this.headTeachers = headTeachers;
        this.teachers = teachers;
        this.students = students;
    }

    static placeholder(): SchoolUsersResponse{
        return new SchoolUsersResponse(Profile.placeholder(), [], [], []);
    }
}

