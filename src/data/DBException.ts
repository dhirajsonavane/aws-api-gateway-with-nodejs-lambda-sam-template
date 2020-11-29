export default class DBException extends Error {
    statusCode: number;
    error: Record<string, string>;
    constructor(message: string, code : number) {
        super(message);
        this.statusCode = code;
        this.error = { "DBError" : message }
    }
}