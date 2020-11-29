export default class ValidationException extends Error {
    errors: Record<string, string[]>;
    constructor(errors: Record<string, string[]>) {
        super('Validation errors');
        this.errors = errors
    }
}

