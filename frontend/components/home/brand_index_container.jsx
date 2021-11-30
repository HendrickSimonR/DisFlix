import { connect } from "react-redux";
import { BrandButtons } from "./brand_buttons"

const mSTP = state => ({
  brands: getBrands(state)
});

const mDTP = dispatch => ({
  getBrands: () => dispatch(getBrands())
});

export default connect(mSTP, mDTP)(BrandButtons)