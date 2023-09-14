import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../services/axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fachData = async () => {
      const result = await axios.get('products');
      setProducts(result.data);
    };
    fachData();
  }, []);
  return (
    <div>
      <h1>Featurd Product</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>

              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
