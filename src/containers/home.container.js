import { GetProducts, GetProductsLoading, GetProductsSuccess, GetProductsFailure } from "../actions/ecommerce.actions";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
    return {
      products: state.products.products,
      loading: state.products.loading,
      error: state.products.error
    }
  } 
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getProducts: () => {
        dispatch(GetProductsLoading());

        dispatch(GetProducts())
          .then(response => {
              setTimeout(() => {
                  if(response.payload.status === 200){
                      dispatch(GetProductsSuccess(response.payload.data))}
                      else{
                          dispatch(GetProductsFailure(response.payload.message))}}
          , 0)});
      }

    }
  }
  
  const mySpecialContainerCreator = connect(mapStateToProps,
                                            mapDispatchToProps);
  export const HomeContainer = mySpecialContainerCreator(Home);
