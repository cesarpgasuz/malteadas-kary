
import { INFO } from "../data"
import ImageMalteada from '../images/malteada.webp'
import styles from '../styles/header.module.css'


const Header = () => {



    

    return (
        <>
            
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