import * as C from './style';

const Header = () => {

    return (
        <C.Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <C.Title>Alberto Souza</C.Title>

            <C.Subtitle>
                Desenvolvedor com foco em back-end, atuando na criação de sites, APIs e sistemas completos. Experiência com JavaScript, Node.js, MySQL, Docker, React, HTML e CSS. Curioso e comprometido com boas práticas e soluções eficientes.
            </C.Subtitle>
        </C.Header>
    );

}

export default Header;