import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Footer = styled.footer`
    gap: 16px;
    display: flex;
    padding-top: 24px;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #222222;
`;

export const Socials = styled.div`
    gap: 24px;
    display: flex;
    justify-content: center;
`;

export const IconGitHub = styled(FaGithub)`
    fill: #F3F3F3;
    font-size: 24px;
    
    &:hover {
        fill: #3B82F6;
    }
`;

export const IconEmail = styled(FaEnvelope)`
    fill: #F3F3F3;
    font-size: 24px;
    
    &:hover {
        fill: #3B82F6;
    }
`;

export const IconLinkedin = styled(FaLinkedin)`
    fill: #F3F3F3;
    font-size: 24px;
    
    &:hover {
        fill: #3B82F6;
    }
`;