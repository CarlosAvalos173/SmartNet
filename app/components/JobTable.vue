<template>
    <v-data-table
        :headers="headers" :items="rols"
     >
  <template v-slot:[`item.edit`] = "{item}">
    <v-btn color="primary" @click="editItem(item)">Edit</v-btn>
  </template>
  <template v-slot:[`item.delete`] = "{item}">
    <v-btn color="primary" @click="deleteItem(item)">Delete</v-btn>
  </template>
  </v-data-table>
</template>

<script>
export default {
    data () {
      return {
        headers: [
        { text: 'iD', value: 'fat' },
          { text: 'Name', value: 'calories' },
          { text: 'Description', value: 'fat' },
        ],
      }
    },
    computed:{
      rols(){
        return this.$store.state.rols.data;
      }
    },
    async fetch(){
        this.$store.commit('rols/storeRols',(await this.$axios.get('http://127.0.0.1:8000/rols')).data);
    },
    methods: {
      editItem(rol){
        this.$store.commit("rol/storeId",rol.id);
        this.$store.commit("rol/storeName",rol.name);
        this.$store.commit("rol/storeDescription",rol.description);
    },
      async deleteItem(it){
        await this.$axios.delete('http://127.0.0.1:8000/'+id);
      }
    }
  }
  
</script>

<style>

</style>