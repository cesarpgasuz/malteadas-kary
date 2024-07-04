import { MALTEADAS } from "../data"
import MenuItem from "./ui/MenuItem"

const Menu = ({addProducto}) => {
    return (
        <div className="contenedor py-9">

            <div className="grid gap-6">
                {MALTEADAS.map(malteada => (
                    <MenuItem
                        key={malteada.id}
                        malteada={malteada}
                        addProducto={addProducto}
                    />
                ))}

            </div>

        </div>
    )
}
export default Menu