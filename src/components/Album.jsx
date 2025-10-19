
export default function Album({album}) {
    console.log(album)
    const { id, category, name, image,description,price} = album

  return (
    <div>
        <div>
            <img className="img-fluid" src={`/img/${image}.webp`} alt="imagen" />
        </div>
        <div>
            <h3 >{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
            <p>${price}</p>
            <button
                type="button"
            >Agregar al Carrito</button>
        </div>
    </div>
  )

  
}
