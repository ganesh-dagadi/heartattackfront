<template>
  <div class="home">
    <div class="block" id="patients">
      <h2>Total number of Patients</h2>
      <span class="nums">{{numPatients}}</span>

      <div class="row">
        <div class="block col-md-6">
          <h3>Number at risk</h3>
          <span class="nums">{{NumInRisk}}</span>
        </div>

        <div class="block col-md-6">
          <h3>Out of risk</h3>
          <span class="nums">{{numPatients -NumInRisk}}</span>
        </div>
      </div>

      <div>
        <router-link class="buttons" :to="{name : 'viewpatients'}">View all</router-link>
        <router-link class="buttons" :to="{name : 'addpatient'}">Add Patient</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
 
  computed : mapGetters(['getPatientData']),
  mounted: function(){
    let patients = this.getPatientData
    let safePatients = []
    let RiskPatient = []
    patients.forEach(patient=>{
      if(patient.inRisk){
        RiskPatient.push(patient)
      }else{
        safePatients.push(patient)
      }
    })
    
    this.numPatients = patients.length
    this.NumInRisk = RiskPatient.length
  },
  name: 'HomeView',
  data() {
    return{
      numPatients : 25,
      NumInRisk : 10
    }
  }
}




</script>


<style>
  #patients{
    text-align : center
  }

  .buttons{
    padding : 1vh 2vw;
    margin : 3vh 2vw;
    border : none;
    border-radius : 5px;
    background : red;
    color: white;
    text-decoration: none;
  }

  .buttons:hover{
    color: aliceblue;
  }
  .nums{
    font-size: 1.2rem;
  }

  .block{
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  @import "~bootstrap/dist/css/bootstrap.css"

</style>
