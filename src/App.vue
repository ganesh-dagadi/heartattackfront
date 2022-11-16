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
  <router-view/>
</div>
</template>

<script>
  export default{
    mounted:function(){
      //get data from backend
      const data = [{
        name:"Ganesh",
        age : 45,
        sex: 'M', //convert to 0 or 1
        chestPain : 2,
        id : 1,
        inRisk : true
      },
      {
        name:"Ganesh",
        age : 45,
        sex: 'M', //convert to 0 or 1
        chestPain : 2,
        id : 2,
        inRisk : false
      },
      {
        name:"Ganesh",
        age : 45,
        sex: 'M', //convert to 0 or 1
        chestPain : 2,
        id : 3,
        inRisk : true
      }
    ]

    this.$store.dispatch("setPatientsData" , data);
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
