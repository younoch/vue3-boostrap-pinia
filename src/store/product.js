import { defineStore } from 'pinia'

export const useProductStore = defineStore('counter', {
  state: () => ({
    productList: [
      {
        name: "Talcom powder",
        price: 453,
        image: '/public/images/1.jpg',
        stock: 5,
      },
      {
        name: "Baby powder",
        price: 450,
        image: '/public/images/2.jpg',
        stock: 4,
      },
      {
        name: "Talcom powder",
        price: 560,
        image: '/public/images/3.jpg',
        stock: 6,
      },
      {
        name: "Baking powder",
        price: 600,
        image: '/public/images/1.jpg',
        stock: 8,
      },
    ],
    productsInCart: []
  }),
  getters: {
    getProducts: (state) => state.getProducts,
  },
  actions: {
    addToCart(payload) {
      this.productsInCart.push(payload.product)
    }
  }
})