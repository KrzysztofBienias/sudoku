import styled from 'styled-components';

export const SudokuGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    grid-template-rows: repeat(9, minmax(0, 1fr));
    width: fit-content;
    margin: 0 auto;
    border: 2px solid black;
`;
