import React, { useEffect, useRef , useState} from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Redux/actions";
import { ordenamiento, filtered, cleanFilters, filterBySize, ProductsByCategoryAndSize } from "../../Redux/actions";
import Swal from "sweetalert2";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const FilteredOrdered = () => {
  const showAlert = ( ) => {
    Swal.fire('No se encontro coincidencias')
  };
  const categorias = useSelector((state)=>state.categories)
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    dispatch(categories());
  }, []);

  const handleOrderByAlpha = (event) => {
    const { value } = event.target;
    if(value !== "") {
      dispatch(ordenamiento(value));
      setSelected(value);
    } else {
      setSelected(value);
    }
  };
  
  const handleCombinedFilter = async (selectedCategory, selectedSize) => {
    try {
      if (selectedCategory && selectedSize) {
        const result = await dispatch(ProductsByCategoryAndSize(selectedCategory, selectedSize));
        if (result.error) {
          showAlert()
          dispatch(cleanFilters())
          setSelectedCategory('')
          setSelectedSize('')
          dispatch(filterBySize(''))
          dispatch(filtered(''))
        }
      } else if (selectedCategory) {
        dispatch(filtered(selectedCategory));
      } else if (selectedSize) {
        dispatch(filterBySize(selectedSize));
      }

      if (selectedCategory === '' && selectedSize === '') {
          dispatch(cleanFilters())
          setSelectedCategory('')
          setSelectedSize('')
          dispatch(filterBySize(''))
          dispatch(filtered(''))
      }
  
    } catch (error) {
      console.log(error)
    }
   
    
  };
  const handleFilter = (event) => {
      const value = event.target.value;
      setSelectedCategory(value);
      handleCombinedFilter(value, selectedSize);
      setSelected("")
  };


  const handleFilterSize = (event) => {
    const value = event.target.value;
    setSelectedSize(value);
    handleCombinedFilter(selectedCategory, value);
    setSelected("")
  };

const handleClick = () => {
  dispatch(cleanFilters());
  setSelectedCategory('')
  setSelectedSize('')
  setSelected('')
  setSelectedPrice('')
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
    <select className="allSelects" onChange={handleOrderByAlpha} value={selected}>
    <option value="">Ordenar por</option>
      <optgroup label="Orden Alfabetico">
        <option value="A-Z" name="alpha">A-Z</option>
        <option value="Z-A" name="alpha">Z-A</option>
      </optgroup>
      <optgroup label="Precio">
        <option value="A" name="price">Menor a mayor</option>
        <option value="D" name="price">Mayor a menor</option>
      </optgroup>
    </select>
    <button className="limpiar" onClick={handleClick}>
      Limpiar
      <CleaningServicesIcon className="cleanIcon" fontSize="medium"/>
    </button>
  </div>
);
};

export default FilteredOrdered;
