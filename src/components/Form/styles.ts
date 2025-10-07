import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    > *:first-child {
        flex-grow: 1;
    }
`;
