import useOrder from './hooks/useOrder';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import {Toaster} from 'react-hot-toast'


function App() {
  
  const {addProducto, mostrarModal, active, orden} = useOrder()

  return (

    <>
    <Toaster />
    <Cart 
      active={active}
      orden={orden}
    />
    <Header 
      mostrarModal={mostrarModal}
      active={active}
    />
    <Menu
      addProducto={addProducto}
    />
      

   </>
  )
}

export default App;
