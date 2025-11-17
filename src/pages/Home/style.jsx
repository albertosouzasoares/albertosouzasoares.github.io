import styled from 'styled-components';

export const Container = styled.main`
    max-width: 800px;
    margin: 0px auto;
    padding: 48px 12px;
`;

export const LightEffect = styled.div`
    inset: 0;
    z-index: 0;
    position: fixed;
    pointer-events: none;
    background: ${({ x, y }) => `
        radial-gradient(600px at ${x}px ${y}px, ${
            '#FFFFFF14'
        },
        transparent 80%)
    `};
    transition: background-color 50ms ease;
`;