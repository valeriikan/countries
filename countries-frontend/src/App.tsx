import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_BASE_URL } from './api';
import { DetailsView, SearchView } from './views';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_BASE_URL} element={<SearchView />} />
                <Route path={`${APP_BASE_URL}/:name`} element={<DetailsView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
