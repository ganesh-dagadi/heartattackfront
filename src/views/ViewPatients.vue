<template>
  <div class="patient">
    <h1>Patient List</h1>
    <div v-for="patient in PatientsData" :key="patient.id" class="card">
      <div class="card-body">
        <div class="info-row">
          <span class="patient-ele"><b>Name</b> : {{patient.name}} </span>
          <span class="patient-ele"><b>Age</b> : {{patient.age}} </span>
        </div>
        <div class="info-row">
          <span class="patient-ele"><b>Sex</b>:{{patient.sex}} </span>
          <span class="patient-ele"><b>Chest Pain Type</b>:{{patient.cp}} </span>
        </div>
        <div class="info-row">
          <span class="patient-ele"><b>Rest blood pressure</b>:{{patient.trestbps}} </span>
          <span class="patient-ele"><b>Cholestoral</b>:{{patient.chol}} mg/dl </span>
          <span class="patient-ele"><b>Maximum Heart rate</b>:{{patient.thalac}} bpm</span>
        </div>

        <div class="info-row">
          <span class="patient-ele"><b>Fasting Blood sugar</b>:{{patient.fbs}} mg/dl</span>
          <span class="patient-ele"><b>Rest ECG status</b>:{{patient.restecg}} </span>
        </div>
        
        <div class="info-row">
          <span class="patient-ele"><b>Exercise Induced Angina</b>:{{patient.exang}} </span>
          <span class="patient-ele"><b>ST depression induced by exercise</b>:{{patient.oldpeak}} </span>
        </div>

        <div class="info-row">
          <span class="patient-ele"><b>Slope of peak exercise ST segment</b>:{{patient.slope}} </span>
          <span class="patient-ele"><b>Number of major vessels colored by Fluroscopy</b>:{{patient.ca}} </span>
          <span class="patient-ele"><b>Thal</b>:{{patient.thal}} </span>
        </div>
        
        <div class="info-row">
          <span v-if="patient.inRisk" class="inRisk patient-ele">Heart Disease : In risk</span>
          <span v-if="!patient.inRisk" class="Safe patient-ele">Heart Disease : Safe</span>
        </div>
         
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

  export default{
    name : "ViewPatients",
    computed : mapGetters(['getPatientData']),
    mounted : function(){
      const data = this.getPatientData;
      this.PatientsData = data
    },
    data(){
      return{
        PatientsData : []
      }
    }
  }
</script>

<style>
  .card-body{
    text-align: left;
  }

  .card{
    margin-top: 3vh;
  }

  .inRisk{
    color: red;
  }

  .Safe{
    color: green;
  }

  .patient-ele{
    margin-left: 3vw;
    margin-right: 3vw;
  }

  .info-row{
    margin-top: 2vh;
  }
</style>
