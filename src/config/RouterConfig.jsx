import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import Pages
import NotFoundPage from '../pages/NotFound';
import HomePage from '../pages/Home';

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig;