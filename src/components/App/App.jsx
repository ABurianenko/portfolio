import { Layout } from '../Layout/Layout'
import { About } from '../../pages/About/About'
import { Contact } from '../../pages/Contact/Contact'
import { Skills } from '../../pages/Skills/Skills'

import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { themeSelect } from '../../redux/theme/selectors'
import { useEffect } from 'react'

import './App.css'
function App() {
  const theme = useSelector(themeSelect);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <Layout>
        <Routes>

          <Route path="/" element={<Navigate to="/about" />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/experience' element={<Experience />} /> */}
          {/* <Route path='/projects' element={<Projects />} /> */}
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Layout>
      
    </div>
  )
};

export default App
