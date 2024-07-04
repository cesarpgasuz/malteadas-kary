const MenuItem = ({ malteada }) => {
    const { nombre, descripcion, imagen, precio } = malteada;
    
    return (
        <div key={malteada.id} className="flex gap-4 border border-slate-200 rounded px-2 py-4">
            <img src={`./images/${imagen}`} className="w-20 h-20" alt="malteada image" />
            <div>
                <h3 className="font-bold text-xl">{nombre}</h3>
                <p className="text-sm">{descripcion}  </p>
                <span className="block text-slate-800 font-bold text-lg">${precio}</span>
            </div>

        </div>
    )
}
export default MenuItem