import styled from 'styled-components';

interface ButtonT {
    border?: boolean;
    fullWidth?: boolean;
}

export const Button = styled.button<ButtonT>`
    padding: 0.6rem 1.4rem;
    background-color: transparent;
    color: #555;
    cursor: pointer;
    transition: scale 50ms ease-in-out;

    border: ${({ border }) => (border ? '1px solid #DDD' : 'none')};
    border-radius: ${({ border }) => (border ? '4px' : 'none')};

    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

    &:active {
        scale: 1.1;
    }
`;
