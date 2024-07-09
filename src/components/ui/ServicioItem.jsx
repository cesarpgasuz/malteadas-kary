const ServicioItem = ({servicio}) => {
    const {title, image} = servicio
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-4">
        <img src={`./images/${image}`} alt={`imagen ${title}`} className="w-14 h-14" />
        <h3 className="text-slate-900 font-semibold text-center">{title}</h3>
    </div>
  )
}
export default ServicioItem