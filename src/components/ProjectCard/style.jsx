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

export const Card = styled.div`
    padding: 24px;
    border-radius: 12px;
    background-color: #111111;
    border: 1px solid #222222;
    box-shadow: 0px 2px 10px #0000001A;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const CardText = styled.p`
    color: #AAAAAA;
    text-align: justify;
    margin-bottom: 16px;
`;

export const Badges = styled.span`
    gap: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 16px;

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

export const Links = styled.div`
    gap: 16px;
    display: flex;

    a {
        color: #3B82F6;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`;