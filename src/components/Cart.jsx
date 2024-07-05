

const Cart = ({active, orden}) => {


  return (
    <div className={`fixed w-full h-[80%] bg-slate-100 ${active ? 'bottom-0' : '-bottom-full'} transition-all ease-in left-0 right-0 z-30 p-5`}>
      <h3 className="text-center font-bold text-slate-700 mb-4 uppercase">Pedido</h3>
          <ul>
             {orden.map(item => (
              <li key={item.id}>
                {item.nombre}
                <span>Cantidad: {item.cantidad}</span>
              </li>
        ))}
          </ul>
       
    </div>
  )
}
export default Cart