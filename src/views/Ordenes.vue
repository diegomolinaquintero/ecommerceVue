<template>
  <div class="container">
    <div class="mt-2 mb-2 row row-cols-1 row-cols-md-5 g-4">
      <template v-for="ArrayPedido in ArrayPedidos" :key="ArrayPedidos.id">
        <ArrayPedidos :ArrayPedido="ArrayPedido" />
        Ordenes
      </template>
    </div>
  </div>
</template>

<script>
import { getOrder } from '../services/verordenes.js';
import { ref, onMounted }  from 'vue';
import Swal from 'sweetalert2';
import ArrayPedidos from '../components/VerPedido.vue';

export default {
  components: {
    ArrayPedidos
  },
  setup() {

    let ArrayPedidos = ref([]);

    onMounted(async () => {

      Swal.fire({
        allowOutsideClick: false,
        text: 'Loading...'
      });
      
      Swal.showLoading();
      
      const resp = await getOrder();
      const body = await resp.json();
      ArrayPedidos.value = body;
      Swal.close();
    
    });

    return {
      ArrayPedidos
    }

  },
}
</script>

<style>


</style>
