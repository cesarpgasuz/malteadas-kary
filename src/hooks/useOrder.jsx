import { useState } from "react"
import toast from "react-hot-toast";

const useOrder = () => {
  const body = document.querySelector('body');
  const [orden, setOrden] = useState([])
  const [active, setActive] = useState(false)
  const [total, setTotal] = useState(0)





  const addProducto = (item) => {

    const itemExist = orden.find(ordenItem => ordenItem.id === item.id)

    if (itemExist) {

      const actualizarOrden = orden.map(ordenItem => ordenItem.id === item.id ?
        { ...ordenItem, cantidad: ordenItem.cantidad + 1 } : ordenItem
      )

      setOrden(actualizarOrden)
      toast.success('Producto Agregado')
    } else {
      const newItem = { ...item, cantidad: 1 } // creamos un objeto nuevo para evitar mutar
      setOrden([...orden, newItem])
      toast.success('Producto Agregado')
    }
  }

  const removeItem = (id) => {
    setOrden(orden.filter(ordenItem => ordenItem.id !== id))
  }


  const mostrarModal = () => {
    setActive(!active)

    if (active) {
      body.classList.remove('oculto')
    } else {
      body.classList.add('oculto')
    }
  }

  



  return (
    { addProducto, mostrarModal, active, orden, removeItem }
  )
}
export default useOrder