import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import Pages
import NotFoundPage from '../pages/NotFound';

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig;