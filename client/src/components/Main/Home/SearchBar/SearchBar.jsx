import usePlaceAutocomplete, {getGeocode, getLatLng } from "use-places-autocomplete"

function SearchBar({updateCoords,isLoaded}) {
  const { value, setValue, init, suggestions: {status, data}, clearSuggestions } = usePlaceAutocomplete({
    initOnMount: false,
    cache: 24 * 60 * 60,
  })
  const handleChange = (e) => setValue(e.target.value)
  const handleSelect = async (e) => {
    setValue(e.target.textContent, false)
    clearSuggestions()
    let code = await getGeocode({address: e.target.textContent})
    let {lat, lng} = await getLatLng(code[0])
    updateCoords({lat, lng})
  }

  isLoaded ? init() : null
  return(
    <>
      <section className="search-bar">
        <img src="./figma_svg/search.svg" className="icon"/>
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
