import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Heder'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  // Definir categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=43b8a425e1ac42358c382a1f55077f71`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
        
      </div>
    </Fragment>
  );
}

export default App;
