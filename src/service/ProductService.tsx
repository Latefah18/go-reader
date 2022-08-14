
export class ProductService {
// book in home page
    getProductsSmall() {
        return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
    }
// book in my hook page
    getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

   
}
  