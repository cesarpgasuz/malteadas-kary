import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import IconCart from "./icons/IconCart"
import useOrden from "../hooks/useOrden"
import IconMalteada from "./icons/IconMalteada"
import IconServicios from "./icons/IconServicios"
import IconReloj from "./icons/IconReloj"

const Navbar = () => {

    const {orden} = useOrden()
    const navigate = useNavigate()
    const {pathname} = useLocation()


    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 80) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        // agregar el listener de scroll al montar el componente
        window.addEventListener('scroll', handleScroll);

        //limpiamos el listener cuando el componente se desmote
        return () => {
            window.addEventListener('scroll', handleScroll);
        }

    }, [])


    const itemsTotal = useMemo(() => orden.reduce((total, item) => total + item.cantidad, 0), [orden])

    const IconTotal = ({ itemsTotal }) => (
        <span className="absolute bg-pink-700 w-7 h-7 text-pink-100 font-bold flex justify-center items-center rounded-full -right-[5px] -top-2">{itemsTotal}</span>
    )


    const iconClases = () => 'w-8 h-8'


  return (
    <nav className={`z-50 ${isScrolled ? 'bg-white shadow-lg' : ''} transition-all fixed top-0 left-0 right-0  h-[60px]`}>
                <div className="contenedor flex justify-between items-center h-full">
                    <span
                        className={`${isScrolled ? 'text-slate-900' : 'text-transparent'} transition-all font-bold`}
                    >Malteadas Kary</span>

                    <div className="fixed bg-sky-950 rounded-full flex w-fit bottom-2 left-0 right-0 mx-auto items-center gap-8 px-8 py-2">
                        <ul><Link to="/"><IconMalteada className={iconClases()} color={`${pathname === '/' ? '#fde047' : '#f0f9ff'}`} /><span className="hidden">Inicio</span></Link></ul>
                        <ul><Link to="/servicios"><IconServicios className={iconClases()} color={`${pathname === '/servicios' ? '#fde047' : '#f0f9ff'}`} /><span className="hidden">Servicios</span></Link></ul>
                        <ul><Link to="/horario"><IconReloj className={iconClases()} color={`${pathname === '/horario' ? '#fde047' : '#f0f9ff'}`} /><span className="hidden">Horario</span></Link></ul>
                    </div>

                     <button
                    className="relative z-50 px-4 flex-shrink w-fit h-fit rounded right-0 active:bg-slate-200"
                    onClick={() => navigate('/carrito')}
                ><IconCart className="w-8 h-8" />{orden.length > 0 && <IconTotal itemsTotal={itemsTotal} />}</button>   
                </div>
                
            </nav>
  )
}
export default Navbar