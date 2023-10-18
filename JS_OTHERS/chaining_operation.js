let user = {
  name: 'Wilmer',
  address: {
    address1: '',
  },
  order: {
    product: {
      name: 'Sunscreen',
      price: 50,
    },
  },
}; //from database
const street = user.address ? user.address.street : '';

console.log(user.age); //

console.log(user.order.product.name); //
//?. optional chaining
//? :  ternary operator

console.log(user.address && user.address.street && user.address.street.name);

// from database
const userProfile = {
  id: 1,
  username: 'kodego@gmail.com',
  // address: {
  //     latitude : 19121,
  //     longitude: 2000
  // }
};

//call dito ng map api nag pass ka ng location
// is ung location based sa longitude and latitude

const lat = userProfile.address?.latitude ?? 'default latitude';
const long = userProfile.address?.longitude ?? 'default longitude';

//lat.toString().toUpperCase()

//call api map  ( latitude, longitude);

//display ng tamang location based sa longitude and latitude

const a = 0 || '';

//if(true || false || true)
