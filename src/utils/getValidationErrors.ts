import { ValidationError } from 'yup';

interface Errors {
    [Key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validarionErrors: Errors = {};

    err.inner.forEach(error => {
        validarionErrors[error.path as string] = error.message;
    });

    return validarionErrors;
}
