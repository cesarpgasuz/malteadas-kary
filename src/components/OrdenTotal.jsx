import { useMemo } from "react"

const OrdenTotal = ({orden}) => {

    const total = useMemo(() => orden.reduce((total, item) => total + (item.cantidad * item.precio), 0), [orden])



  return (
    <div>
        <h4 className="text-center text-slate-800 font-bold text-lg mt-4">Total: ${total} </h4>
    </div>
  )
}
export default OrdenTotal