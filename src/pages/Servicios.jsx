import { SERVICIOS } from "../data"
import ServicioItem from "../components/ui/ServicioItem"

const Servicios = () => {
  return (
    <div className="contenedor py-6">
    <h2 className="font-bold text-slate-900 text-2xl mb-2">Servicios</h2>
    <p className="text-slate-400 mb-6">En malteadas kary contamos con los siguientes servicios.</p>

    <div className="grid grid-cols-2 gap-2">
        {SERVICIOS.map(servicio => (
            <ServicioItem 
                key={servicio.id}
                servicio={servicio}
            />
        ))}
    </div>

</div>
  )
}
export default Servicios