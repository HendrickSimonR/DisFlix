import { fetchBrand, fetchBrands } from '../util/brand_api';

export const RECEIVE_BRAND = 'RECEIVE_BRAND';
export const RECEIVE_BRANDS = 'RECEIVE_BRANDS';

export const receiveBrands = brands => ({
  type: RECEIVE_BRANDS,
  brands
});

export const receiveBrand = brand => ({
  type: RECEIVE_BRAND,
  brand
});


export const getBrands = () => dispatch => {
  return fetchBrands().then(
    brands => dispatch(receiveBrands(brands))
  );
};

export const getBrand = id => dispatch => {
  return fetchBrand(id).then(
    brand => dispatch(receiveBrand(brand))
  );
};

// comment