import {useState, useEffect} from 'react'
import ProductCard from '../ProductCard'

import './style.css'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [userInput, setUserInput] = useState('')

  const handleChange = () => {}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
        )
        if (res.status === 200) {
          console.log('fetch Success')
          const data = await res.json()
          const {drinks} = data
          setProducts(drinks)
        } else {
          console.log('Something went wrong')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter(item =>
    item.strDrink.toLowerCase().includes(userInput.toLowerCase()),
  )

  return (
    <section>
      <div className="homeSection">
        <div className="searchContainer">
          <input
            type="search"
            placeholder="Enter drink name..."
            onChange={e => setUserInput(e.target.value)}
            className="inputELe"
          />
        </div>
      </div>
      <div className="drinks">
        <h1>Drinks:</h1>
        {!loading && (
          <div className="productsCard">
            {products ? (
              <>
                {filteredProducts.map(item => (
                  <ProductCard key={item.idDrink} product={item} />
                ))}
              </>
            ) : (
              <h1>No items found...</h1>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default HomePage
