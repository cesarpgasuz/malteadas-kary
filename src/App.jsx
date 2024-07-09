import useOrder from './hooks/useOrder';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Servicios from './components/Servicios';
import Horario from './components/Horario';
import {Toaster} from 'react-hot-toast'


function App() {
  
  const {addProducto, mostrarModal, active, orden, removeItem, enviarPedido} = useOrder()

  return (

    <>
    <Toaster />
    <Cart 
      active={active}
      orden={orden}
      removeItem={removeItem}
      mostrarModal={mostrarModal}
      enviarPedido={enviarPedido}
    />
    <Header 
      mostrarModal={mostrarModal}
      active={active}
      orden={orden}
    />
    <Menu
      addProducto={addProducto}
    />
    <Servicios />
    <Horario />

   </>
  )
}

export default App;
