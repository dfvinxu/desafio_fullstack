
import EnterOptions from "../EnterOptions/EnterOptions";

const Welcome = () => {
  const handleClick = (e) => {
    console.log(e.target.value)
  }
  return(
    <>
      <img src="./logo-placeholder.png" alt="logo"/>
      <section className="language-selector">
        <label htmlFor="español">
          <img src="./svg/spain.svg" alt="español" className="flag"/>
        <input type="radio" name="language" id="español" hidden value="español" onClick={handleClick}/>
        </label>
        <label htmlFor="english" >
          <img src="./svg/english.svg" alt="english" className="flag"/>
          <input type="radio" name="language" id="english" value="english" hidden onClick={handleClick}/>
        </label>
      </section>
      <section className="user-actions">
        <button>Iniciar sesión</button>
        <button>Registrarse</button>
      </section>
      <EnterOptions />
    </>
  )
};

export default Welcome;
