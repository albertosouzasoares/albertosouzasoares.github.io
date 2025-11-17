import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TbError404 } from 'react-icons/tb';

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

export const Container = styled(motion.main)`
    display: flex;
    max-width: 800px;
    margin: 0px auto;
    min-height: 100vh;
    padding: 48px 12px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: 16px;
    text-align: center;
`;

export const Icon404 = styled(TbError404)`
    font-size: 120px;
    stroke: #F3F3F3;
    display: inline-flex;
`;