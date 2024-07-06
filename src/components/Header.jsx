import { useMemo, useEffect, useState } from "react"
import { INFO } from "../data"
import ImageMalteada from '../images/malteada.webp'
import styles from '../styles/header.module.css'
import IconCart from "./icons/IconCart"

const Header = ({ mostrarModal, active, orden }) => {

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
        <span className="absolute bg-pink-700 w-7 h-7 text-pink-100 font-bold flex justify-center items-center rounded-full -right-1 -top-4">{itemsTotal}</span>
    )

    return (
        <>
            <nav className={`z-50 ${isScrolled ? 'bg-white shadow-lg' : ''} transition-all fixed top-0 left-0 right-0  h-[60px]`}>
                <div className="contenedor flex justify-between items-center h-full">
                    <span
                        className={`${isScrolled ? 'text-slate-900' : 'text-transparent'} transition-all font-bold`}
                    >Malteadas Kary</span>

                     <button
                    className={`relative top-2 z-50 px-4 flex-shrink w-fit h-fit rounded right-0 ${active ? 'bg-slate-200' : ''}`}
                    onClick={() => mostrarModal()}
                ><IconCart className="w-8 h-8" />{orden.length > 0 && <IconTotal itemsTotal={itemsTotal} />}</button>   
                </div>
                
            </nav>
            <header className="overflow-hidden">
                <section className="contenedor py-8 relative">
                    <div className={`${styles.circle} absolute blur-[45px]`}></div>
                    <div className={`${styles.circle} absolute blur-[45px]`}></div>
                    <div className="relative z-10">
                        <img src={ImageMalteada} alt="imagen de una malteada" className="w-[90px] h-[90px]" />
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold mb-2 mt-2 text-slate-900">{INFO.title}</h1>
                        <p className="text-slate-600">{INFO.summary}</p>
                    </div>

                </section>
            </header>
        </>

    )
}
export default Header