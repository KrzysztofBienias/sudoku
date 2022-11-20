import styled from 'styled-components';

interface CellT {
    bgColor?: boolean;
}

export const Cell = styled.input<CellT>`
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 1.3rem;
    border: 1px solid gray;
    background-color: ${({ bgColor }) => (bgColor ? `#DDD` : `#fff`)};

    @media screen and (min-width: 420px) {
        width: 30px;
        height: 30px;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 500px) {
        width: 40px;
        height: 40px;
        font-size: 1.7rem;
    }

    @media screen and (min-width: 580px) {
        width: 50px;
        height: 50px;
        font-size: 2.1rem;
    }

    @media screen and (min-width: 800px) {
        width: 70px;
        height: 70px;
        font-size: 3rem;
    }
`;
