import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [add, setadd] = useState("Add to Cart");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    setadd("Success Add");
  };

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setloading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex">
            <Skeleton height={40} width={100} />
            <Skeleton height={40} width={100} style={{ marginLeft: 6 }} />
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div>
          <div className="col-md-6" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6" key={product.id}>
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star mx-1"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
            >
              {add}
            </button>
            <Link to="/cart" className="btn btn-dark ms-3 px-3 py-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-4">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Product;
