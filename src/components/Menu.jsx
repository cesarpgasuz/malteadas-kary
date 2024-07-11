import { MALTEADAS } from "../data"
import MenuItem from "./ui/MenuItem"

const Menu = () => {
    return (
        <div className="contenedor py-6">
            <h2 className="font-bold text-slate-900 text-2xl mb-6">Conoce nuestro menú</h2>
            <div className="grid gap-4 grid-cols-2">
                {MALTEADAS.map(malteada => (
                    <MenuItem
                        key={malteada.id}
                        malteada={malteada}
                    />
                ))}

            </div>

        </div>
    )
}
export default Menu