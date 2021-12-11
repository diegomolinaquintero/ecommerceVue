<template>
  <div class="col">
        <div class="card">
            <!-- <img :src="product.image" class="card-img-top" alt="Logo"> -->
            <div class="card-body">
                <h5 class="card-title"> Id Pedidos {{ ArrayPedidos.id }}</h5>
                <p class="card-text">Email: {{ ArrayPedidos.email }}</p>
                <p class="card-text">Fecha de creación: {{ ArrayPedidos.created_at }}</p>
                <!-- v-for productos -->
                <p class="card-text">Productos:</p>
                <ul>
                    <li v-for="producto in ArrayPedidos.productos" :key="producto.id">
                    <!-- table -->
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ producto.name }}</td>
                                <td>{{ producto.price }}</td>
                                <td>{{ producto.cantidad }}</td>
                                <td>{{ producto.total }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
                <!-- end v-for -->
                <!-- <p class="card-text">Total: {{ ArrayPedidos.total }}</p>     -->
            </div>
        </div>
    </div>
</template>

<script>
import { add } from '../services/verordenes.js';

export default {
    props: {
        ArrayPedidos: {
            type: Object
        }
    },
    data() {
        return {
            //
        }
    },
    methods: {
        //
    },
    mounted() {
        //
    }
    
}
</script>

<style>
.btn-fill {
  width: 100%;
}
</style>