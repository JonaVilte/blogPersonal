export function Post({ titulo, description, link, parrafo }) {
  return (
    <>
      <div className="animacion">
          <h2 className="centrar"> {titulo} </h2>
          <div className="aliaVertical"> 
              <img src={link} alt={description} className="espacio" />
              <p> {parrafo} </p>       
          </div>
      </div>
    </>
  );
}
