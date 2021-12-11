<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-header">
        Products car
      </div>
      <div class="card-body">
        <!-- input email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" v-model="email">
        </div>
        <template v-if="products.length === 0">
          <p>No existen productos</p>
        </template>
        <template v-if="products.length > 0">
          <table class="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Inventory</th>
                <th scope="col">Quantity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="product in products" :key="product.id">
                  <ProductCar :product="product" :reloadCarFun="reloadCarFun" />
              </template>
            </tbody>
          </table>
          <button @click="buyNow" class="btn btn-warning btn-fill">Buy now</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { get, removeAll } from '../services/car';
import { ref, watchEffect } from 'vue';
import ProductCar from '../components/ProductCar.vue';
import {CreateOrder} from '../services/CreateOrder';
import Swal from 'sweetalert2';

export default {
  components: {
    ProductCar
  },
  setup() {
    const products = ref([]);
    const reloadCar = ref(false);
    const email = ref('');
 

    watchEffect(() => {
      
      reloadCar.value;

      products.value = get();

    });

    const reloadCarFun = () => {
      reloadCar.value = !reloadCar.value;
    }

    const buyNow = async () => {
      
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });
      
      Swal.showLoading();
        // console.log(email.value);

      if(email.value === ''){
        Swal.fire({
          title: 'Error',
          text: 'You must enter your email',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return;
      }
      for (let i = 0; i < products.value.length; i++) {

        if(products.value[i].quantity === 0 || products.value[i].quantity === undefined){
          Swal.fire({
            title: 'Error',
            text: 'You must enter a quantity of ' + products.value[i].name,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          return;
        }
      }
      const order = {
        email: email.value,
        producto: products.value.map(product => {
          return {
            product_id: product.id,
            cantidad: product.quantity
          }
        })  
      };

      console.log(products.value);

      const response = await CreateOrder(order);

      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Your order has been sent!',
          text: 'We will contact you soon!'
        })
        clearStorage();
        removeAll();
        products.value = [];
        email.value = '';
      }
      Swal.close();
    }

    const clearStorage = () => {
      localStorage.removeItem('products');
    }

    return {
      products,
      reloadCarFun,
      buyNow,
      email,
      clearStorage
    }

  }
}
</script>

<style scoped>
  .card-header {
    background: #de1822;
    color: white;
    font-size: 16px;
  }
</style>