import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './style.css'

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
        )
        if (res.status === 200) {
          const data = await res.json()
          const {drinks} = data
          const drink = drinks.filter(item => item.idDrink === id)[0]
          setProduct(drink)
        } else {
          console.log('something went wrong')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProductDetails()
  }, [])

  console.log(loading)

  return (
    !loading && (
      <section className="productDetailsPage">
        <img src={product.strDrinkThumb} alt={product.strImageAttribution} />
        <div className="productDetailsCard">
          <h2>
            <span className="title">Name:</span> {product.strDrink}
          </h2>
          <h2>
            <span className="title">Category: </span> {product.strCategory}
          </h2>
          <h2>
            <span className="title">Glass type:</span> {product.strGlass}
          </h2>
          <h2>
            <span className="title">Category: </span> {product.strCategory}
          </h2>
          <h1>Ingredients:</h1>
          <div className="ingredients">
            <div className="ingredientItem">
              <p>{product.strIngredient1}</p>
              <p>{product.strMeasure1}</p>
            </div>
            <div className="ingredientItem">
              <p>{product.strIngredient2}</p>
              <p>{product.strMeasure2}</p>
            </div>
            <div className="ingredientItem">
              <p>{product.strIngredient3}</p>
              <p>{product.strMeasure3}</p>
            </div>
            <div className="ingredientItem">
              <p>{product.strIngredient4}</p>
              <p>{product.strMeasure4}</p>
            </div>
          </div>
          <h2>
            <span className="title">Description: </span>{' '}
            {product.strInstructions}
          </h2>
        </div>
      </section>
    )
  )
}

export default ProductDetailsPage
