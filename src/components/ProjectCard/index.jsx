import * as C from './style';

const ProjectCard = () => {

    const project = {
        name: 'Howise',
        description: 'O Howise é uma plataforma de newsletters integrada às APIs do Brevo e do Notion, permitindo criar artigos no Notion e enviá-los automaticamente por e-mail. O sistema foi desenvolvido com Node.js no back-end e React no front-end, oferecendo captura e validação de e-mails, além do envio automático dos conteúdos de segunda a sexta, sempre às 7h.',
        technologies: ['Node.js', 'React', 'MySQL', 'Redis', 'Docker'],
        github: 'https://github.com/albertosouzasoares/howise',
        demo: 'https://howise.com.br',
    }

    return (
        <C.Section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <C.SectionTitle>Projeto em Destaque</C.SectionTitle>

            <C.Card>
                <C.CardTitle>{project.name}</C.CardTitle>

                <C.CardText>{project.description}</C.CardText>
                
                <C.Badges>
                    {project.technologies.map((tech) => (
                        <span key={tech}>
                            {tech}
                        </span>
                    ))}
                </C.Badges>

                <C.Links>
                    <a href={project.github} target='_blank' rel='noreferrer'>
                        Código no GitHub
                    </a>

                    <a href={project.demo} target='_blank' rel='noreferrer'>
                        Ver Demo
                    </a>
                </C.Links>
            </C.Card>
        </C.Section>
    );

}

export default ProjectCard;