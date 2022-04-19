import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { delCart } from '../redux/action'

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const emptyItem = () => {
        return (
            <>
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
            </>
        )
    }

    const cartItem = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'> $ {cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const checkout = () => {
        return(
            <>
            <div className="container">
                <div className="row justify-content-center">
                    <Link to='/checkout' className='btn btn-outline-dark mb-5 w-25'>Procesed to Checkout</Link>
                </div>
            </div>
            </>
        )
    }

    
  return (
    <>
    {state.length === 0 && emptyItem()}
    {state.length !== 0 && state.map(cartItem)}
    {state.length !== 0 && checkout()}
    </>
  )
}

export default Cart