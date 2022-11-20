import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: fit-content;
    margin: 2rem auto 0;
    padding: 0 2rem;

    @media screen and (min-width: 800px) {
        margin: 4rem auto 0;
    }
`;

export const DifficultyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 600px) {
        flex-direction: row;
    }

    @media screen and (min-width: 800px) {
        justify-content: space-between;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;

    @media screen and (min-width: 450px) {
        flex-direction: row;
    }
`;
