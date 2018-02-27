import { connect } from "react-redux";
import Cover from "../components/Cover";

const mapStateToProps = (state) => {
    return {
      products: state.products.products,
      loading: state.products.loading,
      error: state.products.error
    }
  }
  
  const mySpecialContainerCreator = connect(mapStateToProps);
  export const CoverContainer = mySpecialContainerCreator(Cover);
