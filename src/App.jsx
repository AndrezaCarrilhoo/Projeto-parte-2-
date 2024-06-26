import React from 'react';
import { Inicio } from './pages/Inicio'
import { Trilhas } from './pages/Trilhas'
import { Nav } from '../src/components/Nav';
import { Routes, Route} from 'react-router-dom';
import { Cursos } from './pages/Cursos';
import { Aulas } from './pages/Aulas';
import { Footer } from './components/Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { NotFound } from './components/NotFound';


function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={` font-[Poppins] ${theme === "ligth" ? "bg-[#f4f4f5] text-black" : "text-white"}`}>
      <Nav />

      <main className='max-w-[1920px] mx-auto'>

        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/trilhas' element={<Trilhas />}></Route>
          <Route path="/cursos/:categoria" element={<Cursos />} />
          <Route path="/cursos/:categoria/:curso" element={<Aulas />} />
          <Route path="/cursos/:categoria/:curso/aula/:id" element={<Aulas />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App
