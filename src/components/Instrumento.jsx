
export default function Instrumento({instrumento, addToCart}) {
    console.log(instrumento)
    const { id, category, name, image,description,price} = instrumento

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`/Imagenes/Productos/${image}.jpg`} alt="imagen" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">${price}</p>
            <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(instrumento)}
            >Agregar al Carrito</button>
        </div>
    </div>
  )
}
