import React, { useEffect } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Redux/actions";

const FilteredOrdered = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categories())
    }, [])

    return (
        <div className="filterAndOrder">
            <select className="allSelects">
                <option value="">Filtrar por</option>
                <option value="animales">Animales</option>
                <option value="animados">Personajes animados</option>
            </select>
            <select className="allSelects">
                <option value="">Orden alfabetico</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select className="allSelects">
                <option value="">Por precio</option>
                <option value="A">Menor a mayor</option>
                <option value="D">Mayor a menor</option>
            </select>
            <button>Limpiar filtros</button>
        </div>
    )
}

export default FilteredOrdered;