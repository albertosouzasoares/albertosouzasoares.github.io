import * as C from './style';

const Footer = () => {

    return (
        <C.Footer>
            <p>Conecte-se comigo</p>

            <C.Socials>
                <a href='https://github.com/albertosouzasoares' target='_blank' rel='noreferrer'>
                    <C.IconGitHub />
                </a>

                <a href='mailto:albertodesouzasoares@hotmail.com'>
                    <C.IconEmail />
                </a>

                <a href='https://linkedin.com/in/albertosoouza' target='_blank' rel='noreferrer'>
                    <C.IconLinkedin />
                </a>
            </C.Socials>

            <p style={{ fontSize: '12px' }}>
                &copy; {new Date().getFullYear()} Alberto Souza. Todos os direitos reservados.
            </p>
        </C.Footer>
    );

}

export default Footer;