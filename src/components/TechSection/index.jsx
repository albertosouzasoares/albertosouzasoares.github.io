import * as C from './style';

const TechSection = () => {

    const technologies = ['JavaScript', 'Node.js', 'MySQL', 'Redis', 'Docker', 'React', 'HTML', 'CSS'];

    return (
        <C.Section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <C.SectionTitle>Tecnologias</C.SectionTitle>

            <C.Badges>
                {technologies.map((tech) => (
                    <span key={tech}>
                        {tech}
                    </span>
                ))}
            </C.Badges>
        </C.Section>
    );

}

export default TechSection;