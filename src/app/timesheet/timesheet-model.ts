export namespace Model {
    export interface TimeSheetForm {
        inTime: string;
        outTime: string;
        date: string;
        workDetail: string;
    }

    export interface ErrorForm {
        inTime: boolean;
        outTime: boolean;
        date: boolean;
        workDetail: boolean;
    }
}