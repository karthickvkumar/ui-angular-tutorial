export namespace Model {
    export interface RegisterForm {
        name: string;
        email: string;
        password: string;
        dob: string;
        gender: string;
        hobbies: string[];
        address: string;
        city: string;
    }

    export interface Error {
        name: boolean;
        email: boolean;
        password: boolean;
        dob: boolean;
        gender: boolean;
        hobbies: boolean;
        address: boolean;
        city: boolean;
    }
}

