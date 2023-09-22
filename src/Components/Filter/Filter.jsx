import React, { useEffect, useRef , useState} from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Redux/actions";
import { ordenamiento, filtered, cleanFilters,filterBySize,ProductsByCategoryAndSize } from "../../Redux/actions";

const FilteredOrdered = () => {
  const categorias = useSelector((state)=>state.categories)
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    dispatch(categories());
  }, []);
  
  const handleOrder = (event) => {
    dispatch(ordenamiento(event.target.value));
  };
  
  const handleCombinedFilter = (selectedCategory, selectedSize) => {
    if (selectedCategory && selectedSize) {
      dispatch(ProductsByCategoryAndSize(selectedCategory, selectedSize));
    } else if (selectedCategory) {
      dispatch(filtered(selectedCategory));
    } else if (selectedSize) {
      dispatch(filterBySize(selectedSize));
    }
  };
  const handleFilter = (event) => {
      const value = event.target.value;
      setSelectedCategory(value);
      handleCombinedFilter(value, selectedSize);
  };


  const handleFilterSize = (event) => {
    const value = event.target.value;
    setSelectedSize(value);
    handleCombinedFilter(selectedCategory, value);
      
  };

const handleClick = () => {
  dispatch(cleanFilters());
};

  

  return (
    <div className="filterAndOrder">
    <select
      className="allSelects"
      onChange={handleFilter}
      value={selectedCategory}
    >
      <option value='' >Filtrar por Categoria</option>
      {categorias?.map((cat)=>(<option key={cat.id} value={cat.id}>{cat.name}</option>))}
    </select>
    <select
      className="allSelects"
      onChange={handleFilterSize}
      value={selectedSize}
    >
      <option value="">Filtrar por Tamaño</option>
      <option value="chiquitina">chiquitina</option>
      <option value="pequeña">pequeña</option>
      <option value="mediana">mediana</option>
      <option value="grande">grande</option>
    </select>
    <select className="allSelects" onChange={handleOrder} >
      <option value="">Orden alfabetico</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
    <select className="allSelects" onChange={handleOrder} >
      <option value="">Por precio</option>
      <option value="A">Menor a mayor</option>
      <option value="D">Mayor a menor</option>
    </select>
    <button className="limpiar" onClick={handleClick}>
      Limpiar filtros
    </button>
  </div>
);
};

export default FilteredOrdered;
