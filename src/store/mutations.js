export default {
  changeCity(state, city) {
    state.city = city;
    console.log('mutations')
  },
  saveAddress(state, address) {
    state.address.push(address)
  }
}