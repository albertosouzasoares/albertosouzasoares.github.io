import { useState, useEffect } from 'react';

import Header from 'components/Header';
import TechSection from 'components/TechSection';
import ProjectCard from 'components/ProjectCard';
import Footer from 'components/Footer';

import * as C from './style';

const Home = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {

        const handleMouseMove = (e) => {
            
            setCoords({
                x: e.clientX,
                y: e.clientY
            });

        }

        window.addEventListener('mousemove', handleMouseMove);

        return function () {
            window.removeEventListener('mousemove', handleMouseMove);
        }

    }, []);

    return (
        <C.Container>
            <C.LightEffect x={coords.x} y={coords.y} />

            <Header />

            <TechSection />

            <ProjectCard />

            <Footer />
        </C.Container>
    );

}

export default Home;