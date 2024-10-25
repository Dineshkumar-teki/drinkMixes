import {Link} from 'react-router-dom'
import './style.css'

const ProductCard = ({product}) => {
  const {
    idDrink,
    strDrink,
    strImageAttribution,
    strInstructions,
    strDrinkThumb,
  } = product
  return (
    <Link to={`/product/${idDrink}`}>
      <div className="productCard">
        <img
          src={strDrinkThumb}
          alt={strImageAttribution}
          className="productCardImg"
        />
        <div className="productDetails">
          <h2>{strDrink}</h2>
          <p>{strInstructions}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
