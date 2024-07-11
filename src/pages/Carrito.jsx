import OrdenTotal from "../components/OrdenTotal"
import IconClose from "../components/icons/IconClose"
import useOrden from "../hooks/useOrden"


const Cart = () => {

  const {orden, removeItem, enviarPedido} = useOrden()

  // console.log(orden)

  const TitleCarrito = () => (
    <h3 className="text-left font-bold text-slate-900 mb-4 uppercase text-2xl mt-5">{orden.length ? 'Mi Pedido' : 'Pedido'}</h3>
  )

  return (
    <section className="contenedor">
      <div className="flex justify-between items-center pr-[2px]">
       <TitleCarrito />
      
      </div>
      <hr className="bg-slate-800"/>
    
      {orden.length ? (

        <div className="flex flex-wrap w-full h-full mt-6" id="cart">
          
          <div className="w-full h-full flex flex-col gap-4">
            {orden.map(({ id, nombre, precio, cantidad, imagen }) => (
              <div key={id} className="w-full flex gap-4 items-center border-b last-of-type:border-b-0 pb-2">
                <img src={`./images/${imagen}`} alt="imagen" className="w-10 h-10" />
                <div>
                  <h4 className="text-slate-400 text-xs">{nombre} - <span>${precio}</span></h4>
                  <p className="font-bold text-slate-950 text-lg">Cantidad: {cantidad} - ${cantidad * precio} </p>
                </div>
                <button
                className="ml-auto bg-slate-200 text-slate-800 rounded px-4 py-1"
                  onClick={() => removeItem(id)}
                >Eliminar</button>
              </div>

            ))}
          </div>
          
          <OrdenTotal 
            orden={orden}
          />
          <button
            className="w-full block bg-green-600 text-green-100 rounded px-2 py-3 mt-auto"
            onClick={enviarPedido}
          >Enviar pedido por Whatsapp</button>
        </div>


      ) : (

        <>
        
          <p className="text-left mt-6 text-slate-400">No has agregado ningun producto</p>
        </>

      )}






    </section>
  )
}
export default Cart