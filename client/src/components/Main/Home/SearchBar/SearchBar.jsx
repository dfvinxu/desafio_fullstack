import React from "react";
import usePlaceAutocomplete, {getGeocode, getLatLng } from "use-places-autocomplete"
import { BsSearch } from "react-icons/bs";
function SearchBar({updateCoords}) {
  const {ready, value, setValue, suggestions: {status, data}, clearSuggestions } = usePlaceAutocomplete()
  const handleChange = (e) => setValue(e.target.value)
  const handleSelect = async (e) => {
    console.log(e.target.textContent)
    setValue(e.target.textContent, false)
    clearSuggestions()
    let code = await getGeocode({address: e.target.textContent})
    let {lat, lng} = await getLatLng(code[0])
    updateCoords({lat, lng})
  }
  return(
    <>
      <section className="search-bar">
        <BsSearch className="icon"/>
        <input type="text" placeholder="Buscar..." onChange={handleChange} value={value}/>
        <section className="options">
          <ul>
            {status === "OK" && data.map(({place_id, description}) =>(
            <li 
              onClick={handleSelect}
              className="search-item" 
              key={place_id} 
              value={description}>
              {description}
            </li>))}
          </ul>
        </section>
      </section>
    </>
  );
}

export default SearchBar;
