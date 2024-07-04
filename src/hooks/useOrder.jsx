import { useState } from "react"
import toast from "react-hot-toast";

const useOrder = () => {
  const body = document.querySelector('body');
  const [orden, setOrden] = useState([])
  const [active, setActive] = useState(false)


  const addProducto = (item) => {

    const itemExist = orden.find(ordenItem => ordenItem.id === item.id)

    if(itemExist){
      
      const actualizarOrden = orden.map(ordenItem => ordenItem.id === item.id ?
        {...ordenItem, cantidad: ordenItem.cantidad + 1} : ordenItem
      )

      setOrden(actualizarOrden)
      toast.success('Producto Agregado')
    }else{
      console.log('no existe')

      item.cantidad = 1
      setOrden([...orden, item])

      toast.success('Producto Agregado')

    }
  }

  const mostrarModal = () => {
    setActive(!active)
    
   if (active) {
      body.classList.remove('oculto')
    } else {
      body.classList.add('oculto')
    }
  }

  console.log(orden)

 

  return (
    { addProducto, mostrarModal, active, orden }
  )
}
export default useOrder