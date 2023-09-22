import React, { useEffect, useRef , useState} from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Redux/actions";
import { ordenamiento, filtered, cleanFilters,filterBySize,ProductsByCategoryAndSize } from "../../Redux/actions";

const FilteredOrdered = () => {
 
  const clean = {
    filter: useRef(null),
    order: useRef(null),
    price: useRef(null),
    size: useRef(null),
    idSize:useRef(null),
  };

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    dispatch(categories());
  }, []);

  const handleOrder = (event) => {
    dispatch(ordenamiento(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filtered(event.target.value));
  };

  const handleFilterSize = (event) => {
      dispatch(filterBySize(event.target.value));
  };
  const handleCombined= (event)=> { if (selectedCategory && selectedSize) {
    dispatch(ProductsByCategoryAndSize(selectedCategory, selectedSize));
  } else if (selectedCategory) {
    dispatch(filtered(selectedCategory));
  } else if (selectedSize) {
    dispatch(filterBySize(selectedSize));
  }
};

const handleClick = () => {
  dispatch(cleanFilters());
  Object.values(clean).forEach((clean) => {
    if (clean.current) {
      clean.current.value = "";
    }
  });
  setSelectedCategory(""); 
  setSelectedSize(""); 
};

  

  return (
    <div className="filterAndOrder">
    <select
      className="allSelects"
      onChange={handleFilter}
      ref={clean.filter}
      value={selectedCategory}
    >
      <option value="">Filtrar por Categoria</option>
      <option value="1">Animales</option>
      <option value="2">Personajes animados</option>
    </select>
    <select
      className="allSelects"
      onChange={handleFilterSize}
      ref={clean.size}
      value={selectedSize}
    >
      <option value="">Filtrar por Tamaño</option>
      <option value="chiquitina">chiquitina</option>
      <option value="pequeña">pequeña</option>
      <option value="mediana">mediana</option>
      <option value="grande">grande</option>
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
    <button className="aplicar" onClick={handleCombined}>
      Aplicar filtros
    </button>
    <button className="limpiar" onClick={handleClick}>
      Limpiar filtros
    </button>
  </div>
);
};

export default FilteredOrdered;
