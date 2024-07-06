import { useMemo } from "react"

const OrdenTotal = ({orden}) => {

    const total = useMemo(() => orden.reduce((total, item) => total + (item.cantidad * item.precio), 0), [orden])
    const totalProductos = useMemo(() => orden.reduce((total, item) => total + item.cantidad, 0), [orden])



  return (
    <div className="w-full">
      <hr className="bg-slate-800"/>
        <p className="text-center text-slate-400 mt-3">Total Productos: {totalProductos}</p>
        <p className="text-center text-slate-800 font-bold text-3xl mt-auto">Total: ${total} </p>
    </div>
  )
}
export default OrdenTotal