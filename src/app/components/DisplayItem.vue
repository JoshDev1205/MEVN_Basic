<template>
  <div>
    <h3>Mostrando Items</h3>

    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Price</th>
          <th>Operaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <a href="#" class="btn btn-danger" v-on:click="deleteItem(item._id)">Eliminar</a>
            <router-link class="btn btn-dark" :to="{ name: 'EditItem', params: {id: item._id}}">Actualizar</router-link>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    created () {
      this.fetchItems()
    },
    methods: {
      fetchItems() {
        this.axios.get('/item')
          .then(res => {
            this.items = res.data
          })
          .catch(err => console.log(err))
      },

      deleteItem(id) {
        this.axios.delete('/item/' + id)
        .then(res => {
          this.items.splice(id, 1)
        })
        .catch(err => console.log(err))
    },
  }
}
</script>
