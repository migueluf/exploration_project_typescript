

import { Layout } from './components/Layout';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Conta from './pages/Conta'
import { AppContextProvider } from './components/AppContext';



function App() {


  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
          </Routes>
        </Layout>
      </ChakraProvider>
      </AppContextProvider>

    </BrowserRouter>

  );
}

export default App;
