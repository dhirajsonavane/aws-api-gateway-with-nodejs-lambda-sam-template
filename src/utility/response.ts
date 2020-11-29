import ValidationException from './ValidationException';
import DBException from '../data/DBException';

export default class ApiResponse {
    statusCode: number;
    body?: string;
    headers: Record<string,string>;
    constructor(code: number, body?: string) {
        this.statusCode = code;
        this.body = body;
        this.headers =  {
            "Access-Control-Allow-Origin": "*"
        }
    }
}

class ValidationErrorApiResponse extends ApiResponse {
    statusCode: number;
    body?: string;
    constructor(code: number, body?: string) {
        super(code, body);
        this.statusCode = code;
        this.body = body;
        this.headers["X-AMAGAPI-ValidationError"] = "yes";
    }
}

class DBErrorApiResponse extends ApiResponse {
    statusCode: number;
    body?: string;
    constructor(code: number, body?: string) {
        super(code, body);
        this.statusCode = code;
        this.body = body;
        this.headers["X-AMAGAPI-DBError"] = "yes";
    }
}

export const errorResposnse = (err: Error) => {
    console.log(err);
    if (err instanceof ValidationException) {
        return new ValidationErrorApiResponse(400, JSON.stringify(err.errors));
    } else if (err instanceof DBException) {
        return new DBErrorApiResponse(err.statusCode, JSON.stringify(err.error));
    } else  {
        return new ApiResponse(500, JSON.stringify({Name: err.name, Message: err.message}));
    }
}
