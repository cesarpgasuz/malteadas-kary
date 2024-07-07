import { useMemo, useState } from "react"
import toast from "react-hot-toast";

const useOrder = () => {
  const body = document.querySelector('body');
  const [orden, setOrden] = useState([])
  const [active, setActive] = useState(false)

  const totalPedido = useMemo(() => orden.reduce((total, item) => total + (item.cantidad * item.precio), 0), [orden])

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

  const enviarPedido = () => {

    const nombre = prompt('Cual es tu nombre ?')


    try {
      if (nombre === '' || typeof nombre === Number || nombre === null || nombre.length < 4) {
        alert('Agrega un nombre')
      } else {
        const miPedido = orden.map(item => `- *${item.cantidad}* ${item.nombre} ($${item.precio}) - *$${item.cantidad * item.precio}*`).join('\n');
        const mensaje = encodeURIComponent(`¡Hola me llamo *${nombre}*! y me gustaria encargar estos productos:\n\n${miPedido}\n\n Total: *$${totalPedido}*`)
        const whatsappUrl = `https://wa.me/+524191389032?text=${mensaje}`

        window.open(whatsappUrl)
      }
    } catch (error) {
      toast(
        "No se pudo enviar tu pedido.\n\nIntenta otra vez, evita bloquear las ventanas emergentes",
        {
          duration: 5000,
        }
      );
    }

  }



  return (
    { addProducto, mostrarModal, active, orden, removeItem, enviarPedido }
  )
}
export default useOrder