<template>
  <tr>
    <th scope="col"></th>
    <th scope="col">{{ product.id }}</th>
    <th scope="col">{{ product.email }}</th>
    <th scope="col">{{ product.created_at }}</th>
    <th v-for="producto in productos" :key="producto.id">
      <p scope="col">{{ producto }}</p>
    </th>
    <th scope="col"></th>
  </tr>

  <!-- pint products -->
</template>


