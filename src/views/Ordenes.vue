<template>
  <div class="container">
    <div class="card mt-4">
      <!-- inpur VerOrdenes -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <button @click="BuscarPedido" class="btn btn-warning btn-fill">
        Buscar
      </button>
      <!-- <button class="btn btn-warning btn-fill">Search</button> -->
      <!-- esto es una prueba -->

      <template v-if="products.length === 0">
        <p>No existen productos</p>
      </template>
      <template v-if="products.length > 0">
        <!-- <p>{{ JSON.stringify(products) }}</p> -->
        <table class="table table-hover table-striped " >
          <thead>
            <tr ALIGN="center">
              <th scope="col"></th>
              <th scope="col">Id</th>
              <th scope="col">email</th>
              <th scope="col">fecha pedido</th>
              <th scope="col">
                productos pedidos
              </th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="product in products" :key="product.id">
              <!-- <VerPedido :product="product" /> -->
              <tr ALIGN="center">
                <th scope="col"></th>
                <th scope="col">{{ product.id }}</th>
                <th scope="col">{{ product.email }}</th>
                <th scope="col">{{ product.created_at }}</th>
                <th>
                  <tr v-for="producto in product.productos" :key="producto.id">

                    <th scope="col">Nombre: {{ producto.name }}//</th>
                    <th scope="col">Precio: {{ producto.price }}//</th>
                    <th scope="col">Cantidad: {{ producto.cantidad }}//</th>
                    <th scope="col">Total del producto: {{ producto.total }}</th>
                  </tr>
                </th>
                <th scope="col"></th>
              </tr>
            </template>
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import VerPedido from "../components/VerPedido.vue";
import { VerORder } from "../services/VerORder";
import Swal from "sweetalert2";

export default {
  components: {
    VerPedido,
  },
  setup() {
    const products = ref([]);
    const reloadCar = ref(false);
    const email = ref("");

    watchEffect(() => {
      reloadCar.value;
      email.value;
      // products.value = get();
    });

    const reloadCarFun = () => {
      reloadCar.value = !reloadCar.value;
    };
    // search pedido and valitae email
    const BuscarPedido = async () => {
      Swal.fire({
        allowOutsideClick: false,
        text: "Loading...",
      });

      Swal.showLoading();
      if (email.value === "") {
        Swal.fire({
          type: "error",
          title: "Error",
          text: "Email is required",
        });
      } else {
        console.log(email.value);

        const order = {
          email: email.value,
        };
        const resp = await VerORder(order);
        // const resp = await VerORder(email.value);
        const body = await resp.json();
        console.log(body);
        products.value = body;
        console.log("products.value", products.value);
        // console.log(products.value);
        Swal.close();
      }
    };

    return {
      products,
      reloadCar,
      reloadCarFun,
      email,
      BuscarPedido,
    };
  },
};
</script>

<style scoped>
.card-header {
  background: #de1822;
  color: white;
  font-size: 16px;
}
</style>
