import { HORARIOS } from "../data"
import HorarioItem from "./ui/HorarioItem"
const Horario = () => {
  return (
    <div className="contenedor py-6">
        <h2 className="font-bold text-slate-900 text-2xl mb-2">Horario</h2>
        <p className="text-slate-400 mb-6">Conoce nuestros horarios de atención.</p>
        <div>
            {HORARIOS.map(horario => (
               <HorarioItem 
                    key={horario.id}
                    horario={horario}
               />
            ))}
        </div>
    </div>
  )
}
export default Horario