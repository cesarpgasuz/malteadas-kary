import { useState } from "react"

const useOrder = () => {

  const [orden, setOrden] = useState([])
  const [active, setActive] = useState(false)


  const addProducto = (item) => {
    setOrden([...orden, item])
    
  }

  const mostrarModal = () => {
    setActive(!active)
  }

  return (
    {addProducto, mostrarModal, active}
  )
}
export default useOrder