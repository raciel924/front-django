<script>
export default {
  mounted() {
   this.getData()
  },
  methods:{
    async getData(){
      try{
        const {data} = await this.$axios.get('http://localhost:8000/api/category/')
        console.log(data)
      }catch (e) {
        console.log(e)
      }
}
  }
}

</script>

<template>
  <h1>componente List</h1>

</template>

<style scoped>

</style>