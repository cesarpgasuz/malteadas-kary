import { MALTEADAS } from "../data"
import MenuItem from "./ui/MenuItem"

const Menu = () => {
    return (
        <div className="contenedor py-9">

            <div className="grid gap-6">
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