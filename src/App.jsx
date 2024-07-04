import useOrder from './hooks/useOrder';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';


function App() {
  
  const {addProducto, mostrarModal, active} = useOrder()

  return (

    <>
    <Cart 
      active={active}
    />
    <Header 
      mostrarModal={mostrarModal}
    />
    <Menu
      addProducto={addProducto}
    />
      

   </>
  )
}

export default App;
