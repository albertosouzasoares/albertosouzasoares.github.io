import GlobalStyle from 'GlobalStyle';
import { createRoot } from 'react-dom/client';
import { lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Error404 = lazy(() => import('pages/404'));

import Loading from 'components/Loading';

const App = () => {

    return (
        <StrictMode>
            <GlobalStyle />

            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StrictMode>
    );

}

const root = document.querySelector('div#root');
const create_root = createRoot(root);
create_root.render(<App />);