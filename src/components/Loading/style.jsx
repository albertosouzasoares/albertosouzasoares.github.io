import styled from 'styled-components';

export const Loading = styled.div`
    width: 100%;
    height: 5px;
    background-color: #1A1A1A;

    span {
        width: 50%;
        height: 5px;
        display: block;
        background-color: #3B82F6;
        animation: loading 1s linear infinite;

        @keyframes loading {
            0% {
                transform: translateX(0px);
            }

            100% {
                transform: translateX(250%);
            }
        }
    }
`;