import useOrden from "../../hooks/useOrden";

const MenuItem = ({ malteada}) => {
    const { nombre, descripcion, imagen, precio } = malteada;
    
    const {addProducto} = useOrden()

    return (
        <div 
            key={malteada.id} 
            className="flex flex-wrap gap-4 border border-slate-300 rounded px-2 py-4"
             
        >
            <img src={`./images/${imagen}`} className="w-20 h-20 mx-auto" alt="malteada image" />
            <div className="flex flex-col text-center">
                <h3 className="font-bold text-lg text-slate-900">{nombre}</h3>
                <p className="text-xs text-slate-600">{descripcion}  </p>
                <span className="block text-slate-900 font-bold text-xl mt-3">${precio}</span>
            </div>
            <button 
                className="mt-auto active:bg-slate-800 bg-slate-200 font-bold text-sm text-slate-900 w-full text-center p-2 rounded active:text-slate-100"
            onClick={() => addProducto(malteada)
            
            }>Agregar</button>
        </div>
    )
}
export default MenuItem