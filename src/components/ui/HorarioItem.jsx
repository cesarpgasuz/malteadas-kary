const HorarioItem = ({horario}) => {
    const {day, hora} = horario
  return (
    <div 
        key={horario.id} 
        className="odd:bg-slate-100/50 px-6 flex justify-between items-center py-4">
            <span className="text-slate-800">{day}</span> 
            <span className="text-slate-600 font-bold">{hora}</span>
    </div>
  )
}
export default HorarioItem