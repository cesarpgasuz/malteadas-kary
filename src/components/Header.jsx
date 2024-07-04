import { INFO } from "../data"
import ImageMalteada from '../images/malteada.webp'
import styles from '../styles/header.module.css'
import IconCart from "./icons/IconCart"

const Header = ({ mostrarModal, active }) => {
    return (
        <header className="overflow-hidden">
            <section className="contenedor py-8 relative">
                <div className={`${styles.circle} absolute blur-[45px]`}></div>
                <div className={`${styles.circle} absolute blur-[45px]`}></div>
                <div className="relative z-10">
                    <img src={ImageMalteada} alt="imagen de una malteada" className="w-[90px] h-[90px]" />
                </div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2 mt-2">{INFO.title}</h1>
                    <p>{INFO.summary}</p>
                </div>
                <button
                    className={`absolute top-5 z-50 px-4 rounded right-0 border ${active ? 'bg-slate-200' : ''}`}
                    onClick={() => mostrarModal()}
                ><IconCart className="w-8 h-8" /></button>
            </section>
        </header>
    )
}
export default Header