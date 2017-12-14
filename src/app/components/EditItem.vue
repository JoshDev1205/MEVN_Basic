<template>
  <div>
    <h1>Actualiza un Item</h1>
    <form v-on:submit.prevent="updateItem">
      <div class="form-group">
        <input class="form-control" type="text" v-model="item.name">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" v-model="item.price">
      </div>
      <button type="submit" class="btn btn-primary">Actualizar</button>
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
    created() {
      this.getItem()
    },
    methods: {
      getItem() {
        this.axios.get('/item/' + this.$route.params.id)
        .then(res => this.item = res.data)
      },
      updateItem() {
        this.axios.put('/item/' + this.$route.params.id, this.item)
        .then(res => {
          this.$router.replace({ name: 'DisplayItem'})
        })

      }
    },
  }
</script>

<style scoped>

</style>