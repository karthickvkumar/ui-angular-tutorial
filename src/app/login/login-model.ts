export namespace Model {

    export interface LoginForm {
        username: string;
        password: string;
        name: string;
        age: number;
        status: boolean;
        address: Adddress;
    }

    interface Adddress {
        doorNo: number;
        streetName: string;
        pinCode: number;
    }

    export interface ResponsForm {
        first_name: string;
        last_name: string;
        rank: Rank;
    }

    interface Rank {
        quateraly: string;
        halfyearly: string;
        annual: string;
    }

    export interface UserForm {
        name: string;
        score: number;
    }

}