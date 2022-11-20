import styled from 'styled-components';

type Bold = 'left' | 'right';

interface StyledPreviewButtonT {
    boldText: Bold;
}

const StyledPreviewButton = styled.div<StyledPreviewButtonT>`
    display: flex;
    align-items: center;
    margin: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0.3rem 0;

    @media screen and (min-width: 450px) {
        margin: 0;
        width: 45%;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;
        font-size: 0.9rem;
        padding: 0.5rem 0;
        width: 50%;
    }

    p:first-child {
        border-right: 1px solid #ddd;
        font-weight: ${({ boldText }) => (boldText === 'left' ? 'bold' : 'normal')};
        color: ${({ boldText }) => (boldText === 'left' ? '#000' : '#555')};
    }

    p:last-child {
        font-weight: ${({ boldText }) => (boldText === 'right' ? 'bold' : 'normal')};
        color: ${({ boldText }) => (boldText === 'right' ? '#000' : '#555')};
    }
`;

export const PreviewButton = ({ children, boldText }: { children: any; boldText: Bold }) => {
    return (
        <StyledPreviewButton boldText={boldText}>
            {children[0]}
            {children[1]}
        </StyledPreviewButton>
    );
};
