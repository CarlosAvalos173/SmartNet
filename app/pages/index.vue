<template>
  <v-row>
    <v-col> 
      <JobTable/>
    </v-col>
    <v-col>
      <Form/>
    </v-col>
  </v-row>
</template>


<script>
import Form from '../components/Form.vue'

export default {
  components: { Form },
}

</script>

<style>

</style>