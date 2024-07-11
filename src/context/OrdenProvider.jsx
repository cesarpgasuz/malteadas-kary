import { createContext, useState, useMemo } from "react";
import toast from "react-hot-toast";

const OrdenContext = createContext();


export const OrdenProvider = ({children}) => {

    //arreglo para guardar los productos seleccionados
    const [orden, setOrden] = useState([])
    const [active, setActive] = useState(false)

    const totalPedido = useMemo(() => orden.reduce((total, item) => total + (item.cantidad * item.precio), 0), [orden])


    const addProducto = (item) => {
        const itemExist = orden.find(ordenItem => ordenItem.id === item.id);

        if(itemExist){
            const actualizarOrden = orden.map(ordenItem => ordenItem.id === item.id ?
                {...ordenItem, cantidad: ordenItem.cantidad +1 } : ordenItem
            )

            setOrden(actualizarOrden)
            toast.success('Producto Agregado')
        }else{
            const newItem = {...item, cantidad: 1}
            setOrden([...orden, newItem])
            toast.success('Producto Agregado')
        }
    }

    const removeItem = (id) => {
        setOrden(orden.filter(ordenItem => ordenItem.id !== id))
        toast.success('Producto Eliminado')

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


        const miPedido = orden.map(item => `- *${item.cantidad}* ${item.nombre} ($${item.precio}) - *$${item.cantidad * item.precio}*`).join('\n');
        const mensaje = encodeURIComponent(`¡Hola! me gustaria ordenar estos productos:\n\n${miPedido}\n\n Total: *$${totalPedido}*`)
        const whatsappUrl = `https://wa.me/+524191389032?text=${mensaje}`
    
        window.open(whatsappUrl)
    
      }



    return(
        <OrdenContext.Provider
            value={{
                addProducto,
                mostrarModal,
                active,
                orden,
                removeItem,
                enviarPedido
            }}
        >
            {children}
        </OrdenContext.Provider>
    )
}

export default OrdenContext
