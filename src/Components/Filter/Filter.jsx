import React, { useEffect, useRef } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Redux/actions";
import { ordenamiento, filtered, cleanFilters } from "../../Redux/actions";

const FilteredOrdered = () => {

    const clean = {
        filter: useRef(null),
        order: useRef(null),
        price: useRef(null)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categories())
    }, [])

    const handleOrder = (event) => {
        dispatch(ordenamiento(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filtered(event.target.value));
    }

    const handleClick = () => {
        dispatch(cleanFilters())
        Object.values(clean).forEach((clean) => {
            if(clean.current) {
                clean.current.value = "";
            }
        });
    }

    return (
        <div className="filterAndOrder">
            <select className="allSelects" onChange={handleFilter} ref={clean.filter}>
                <option value="">Filtrar por</option>
                <option value="1">Animales</option>
                <option value="2">Personajes animados</option>
            </select>
            <select className="allSelects" onChange={handleOrder} ref={clean.order}>
                <option value="">Orden alfabetico</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select className="allSelects" onChange={handleOrder} ref={clean.price}>
                <option value="">Por precio</option>
                <option value="A">Menor a mayor</option>
                <option value="D">Mayor a menor</option>
            </select>
            <button className="limpiar" onClick={handleClick}>Limpiar filtros</button>
        </div>
    )
}

export default FilteredOrdered;