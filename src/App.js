import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div className="App">
        <h1>MERN Blog</h1>
        <Navbar />
        <div id='page-body'>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/articles' element={<ArticleListPage />}/>
                <Route path='/articles/:articleId' element={<ArticlePage />}/>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/create-account' element={<CreateAccount />}  />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
