import OrdenTotal from "./OrdenTotal"


const Cart = ({ active, orden, removeItem }) => {



  return (
    <div className={`fixed w-full h-[85%] bg-slate-100 ${active ? 'bottom-0' : '-bottom-full'} transition-all ease-in left-0 right-0 z-30 px-5 pt-5 pb-2`}>


      {orden.length ? (

        <>
          <h3 className="text-center font-bold text-slate-700 mb-4 uppercase text-2xl">Mi Pedido</h3>
          <div className="flex flex-col gap-4 overflow-auto h-[68%]">
            {orden.map(({ id, nombre, precio, cantidad, imagen }) => (
              <div key={id} className="flex gap-4 bg-white p-2 rounded items-center">
                <img src={`./images/${imagen}`} alt="imagen" className="w-10 h-10" />
                <div>
                  <h4 className="text-slate-400">{nombre} - <span>${precio}</span></h4>
                  <p className="font-bold text-slate-950">Cantidad: {cantidad} - ${cantidad * precio} </p>
                </div>
                <button
                className="ml-auto bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center font-bold"
                  onClick={() => removeItem(id)}
                >X</button>
              </div>

            ))}
          </div>
          <OrdenTotal 
            orden={orden}
          />
          <button
            className="w-full bg-green-600 text-green-100 mt-2 rounded p-2"
          >Enviar pedido por Whatsapp</button>
        </>


      ) : (

        <>
          <h3 className="text-center font-bold text-slate-700 mb-4 uppercase text-2xl">Pedido</h3>
          <p className="text-center text-slate-400">No has agregado ningun producto</p>
        </>

      )}






    </div>
  )
}
export default Cart