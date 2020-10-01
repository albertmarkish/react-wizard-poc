import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    Name: Yup.string().required().max(80),
    Description: Yup.string().max(140)
});