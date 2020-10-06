export namespace Model {

    export interface ResponseData {
        ad: Ad
        data: userData[];
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
    }

    interface Ad{
        company: string;
        text: string;
        url: string
    }

    interface userData {
        avatar: string;
        email: string;
        first_name: string;
        id: number;
        last_name: string;
    }
}