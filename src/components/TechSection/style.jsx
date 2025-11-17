import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
    margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
`;

export const Badges = styled.div`
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    span {
        font-size: 14px;
        color: #CCCCCC;
        cursor: pointer;
        font-weight: 600;
        padding: 6px 12px;
        transition: 300ms;
        border-radius: 24px;
        display: inline-block;
        border: 1px solid #333333;
        background-color: #1A1A1A;
    
        &:hover {
            transform: scale(1.1);
            background-color: #3B82F6;
        }    
    }
`;