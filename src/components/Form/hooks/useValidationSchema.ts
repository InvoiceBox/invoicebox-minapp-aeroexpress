import { AnyObject, setIn } from 'final-form';
import { useMemo } from 'react';
import { AnySchema } from 'yup';

const setInError = (errors: AnyObject, innerError: any) => setIn(errors, innerError.path, innerError.message);

const emptyObj = Object.create(null);

export const makeValidate = (schema: AnySchema) =>
    async function validate(values: any) {
        try {
            await schema.validate(values, { abortEarly: false });
        } catch (err) {
            // @ts-ignore
            return err.inner.reduce(setInError, emptyObj);
        }
    };

const useValidationSchema = (schema?: AnySchema) =>
    useMemo(() => (schema ? makeValidate(schema) : schema), [schema]);

export default useValidationSchema;
