import { useContext } from "react";
import OrdenContext from "../context/OrdenProvider";

const useOrden = () => {
    return useContext(OrdenContext)
}

export default useOrden