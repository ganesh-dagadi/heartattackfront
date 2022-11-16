<template>
  <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Save Heart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/patients">Patients</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container" style="padding-top: 20px;">
  <router-view v-if="mounted"></router-view>
</div>
</template>

<script>
import axios from 'axios'
  export default{
    created:async function(){
    const res = await axios.get('http://localhost:5000/patient')
    console.log(res)
    this.$store.dispatch("setPatientsData" , res.data.data);
    this.mounted = true
    },

    data(){
      return{
        mounted : false
      }
    }
    
  }
</script>
<style>
.navbar{
  background-color: red;
}

.navbar-brand ,.nav-link{
  color: white;
}
@import "~bootstrap/dist/css/bootstrap.css"
</style>
