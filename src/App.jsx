import useOrder from './hooks/useOrder';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import {Toaster} from 'react-hot-toast'


function App() {
  
  const {addProducto, mostrarModal, active, orden, removeItem} = useOrder()

  return (

    <>
    <Toaster />
    <Cart 
      active={active}
      orden={orden}
      removeItem={removeItem}
      mostrarModal={mostrarModal}
    />
    <Header 
      mostrarModal={mostrarModal}
      active={active}
      orden={orden}
    />
    <Menu
      addProducto={addProducto}
    />
      

   </>
  )
}

export default App;
