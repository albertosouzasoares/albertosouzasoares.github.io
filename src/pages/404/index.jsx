import { Fragment, useEffect, useState } from 'react';

import * as C from './style';

const Error404 = () => {

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
        <Fragment>
            <C.LightEffect x={coords.x} y={coords.y} />
            
            <C.Container initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <C.Icon404 />
                <C.Text>A página que você está tentando acessar não existe.</C.Text>
            </C.Container>
        </Fragment>
    );
    
};

export default Error404;