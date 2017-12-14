<template>
  <div>
    <form v-on:submit.prevent="addItem" class="card">
      <div class="card-title text-center">
        <h1>Agrega un Item</h1>
      </div>
      <div class="card-body">
      <div class="form-group">
        <input class="form-control" type="text" v-model="item.name" placeholder="Agrega un Nombre">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" v-model="item.price" placeholder="Agrega un Precio">
      </div>
      <button type="submit" class="btn btn-primary">
        Agregar Item
      </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: {}  
      }
    },
    methods: {
      addItem() {
        this.axios.post('/item', this.item)
          .then(res => {
            this.$router.replace({ name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    },
  }
</script>

<style scoped>

</style>