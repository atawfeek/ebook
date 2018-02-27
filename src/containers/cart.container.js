import { AddCart, RemoveCart } from "../actions/ecommerce.actions";
import { connect } from "react-redux";
import Cart from "../components/AddToCartButton";
import CartCount from "../components/Cart";
import SidebarCart from "../components/SidebarCart";
import CartDetails from "../components/CartDetails";

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems,
      products: state.products.products
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addCart: (cart) => {
        dispatch(AddCart(cart));
      },

      removeCart: (cartId) => {
        dispatch(RemoveCart(cartId));
      }

    }
  }
  
  const mySpecialContainerCreator = connect(mapStateToProps,
                                              mapDispatchToProps);
  const mySpecialContainerCreatorII = connect(mapStateToProps,
                                              mapDispatchToProps);
  const mySpecialContainerCreatorIII = connect(mapStateToProps,
                                              mapDispatchToProps);
  const mySpecialContainerCreatorIV = connect(mapStateToProps,
                                              mapDispatchToProps);
  export const CartContainer = mySpecialContainerCreator(Cart);
  export const CartCountContainer = mySpecialContainerCreatorII(CartCount);
  export const SidebarCartContainer = mySpecialContainerCreatorIII(SidebarCart);
  export const CartDetailsContainer = mySpecialContainerCreatorIV(CartDetails);
