<template>
    <div class="wrapper">
        <h1 class="text-center">Enter details of new patient</h1>
        <form @submit.prevent="handleAddPatient">
            <div class="input-wrap">
                <label for="name">Name:</label>
                <input id="name" type="text" v-model="patientData.name">
            </div>
            <div class="input-wrap">
                <label for="age">Age:</label>
                <input id="age" type="number" v-model="patientData.age">
            </div>

            <div class="input-wrap">
                <label for="gender">Gender:</label>
                <div>
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" v-model="patientData.sex">
                    <label class="form-check-label" for="flexRadioDefault1">Male</label>
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="Female" v-model="patientData.sex">
                    <label class="form-check-label" for="flexRadioDefault2">Female</label>
                </div>
               
            </div>

            <div class="input-wrap">
                <label for="gender">Chest Pain Type:</label>
                <div>
                    <input class="form-check-input" type="radio" name="ChestPain" id="flexRadioDefault1" value=1 v-model="patientData.cp">
                    <label class="form-check-label" for="flexRadioDefault1">Typical Angina</label>
                    <input class="form-check-input" type="radio" name="ChestPain" id="flexRadioDefault2" value=2 v-model="patientData.cp">
                    <label class="form-check-label" for="flexRadioDefault2">ATypical Angina</label>
                    <input class="form-check-input" type="radio" name="ChestPain" id="flexRadioDefault3" value=3 v-model="patientData.cp">
                    <label class="form-check-label" for="flexRadioDefault3">Non Anginal Pain</label>
                    <input class="form-check-input" type="radio" name="ChestPain" id="flexRadioDefault4" value=4 v-model="patientData.cp">
                    <label class="form-check-label" for="flexRadioDefault3">Asymptomatic</label>
                </div>
                
            </div>
            <div class="input-wrap">
                <label for="rbp">Resting Blood Pressure:</label>
                <input id="rbp" type="number" v-model="patientData.trestbps">
            </div>

            <div class="input-wrap">
                <label for="chol">Serum Cholestoral:</label>
                <input id="chol" type="number" v-model="patientData.chol">
                mg/dl
            </div>
            <div class="input-wrap">
                <label for="fbs">Is fasting blood sugar greater than 120mg/dl:</label>
                <div>
                    <input class="form-check-input" type="radio" name="SugarLevel" id="flexRadioDefault1" value=1 v-model="patientData.fbs">
                    <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                    <input class="form-check-input" type="radio" name="SugarLevel" id="flexRadioDefault2" value=0 v-model="patientData.fbs">
                    <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
            </div>

            <div class="input-wrap">
                <label for="trestecg">resting ECG result:</label>
                <div>
                    <input class="form-check-input" type="radio" name="ECG" id="flexRadioDefault1" value=1 v-model="patientData.restecg">
                    <label class="form-check-label" for="flexRadioDefault1">Normal</label>
                    <input class="form-check-input" type="radio" name="ECG" id="flexRadioDefault2" value=2 v-model="patientData.restecg">
                    <label class="form-check-label" for="flexRadioDefault2">Having ST-T wave abnormality</label>
                    <input class="form-check-input" type="radio" name="ECG" id="flexRadioDefault3" value=3 v-model="patientData.restecg">
                    <label class="form-check-label" for="flexRadioDefault3">Showing probable or definite left vetricular hypertrophy</label>
                </div>
            </div>

            <div class="input-wrap">
                <label for="thalach">Maximum heart rate achieved:</label>
                <input id="thalach" type="number" v-model="patientData.thalach">
            </div>

            <div class="input-wrap">
                <label for="exang">Exercise Induced Angina?:</label>
                <div>
                    <input class="form-check-input" type="radio" name="Angina" id="flexRadioDefault1" value=1 v-model="patientData.exang">
                    <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                    <input class="form-check-input" type="radio" name="Angina" id="flexRadioDefault2" value=0 v-model="patientData.exang">
                    <label class="form-check-label" for="flexRadioDefault2">No</label>
                </div>
            </div>

            <div class="input-wrap">
                <label for="oldpeak">ST depression induced by exercise relative to rest:</label>
                <input id="oldpeak" type="number" v-model="patientData.oldpeak">
            </div>

            <div class="input-wrap">
                <label for="slope">Slope of the peak exercise ST segment:</label>
                <div>
                    <input class="form-check-input" type="radio" name="STsegment" id="flexRadioDefault1" value=1 v-model="patientData.slope">
                    <label class="form-check-label" for="flexRadioDefault1">0</label>
                    <input class="form-check-input" type="radio" name="STsegment" id="flexRadioDefault2" value=2 v-model="patientData.slope">
                    <label class="form-check-label" for="flexRadioDefault2">1</label>
                    <input class="form-check-input" type="radio" name="STsegment" id="flexRadioDefault3" value=3 v-model="patientData.slope">
                    <label class="form-check-label" for="flexRadioDefault3">2</label>
                </div>
            </div>
            <div class="input-wrap">
                <label for="ca">Number of major vessels colored by fluroscopy:</label>
                <div>
                    <input class="form-check-input" type="radio" name="Fluroscopy" id="flexRadioDefault1" value=0 v-model="patientData.ca">
                    <label class="form-check-label" for="flexRadioDefault1">0</label>
                    <input class="form-check-input" type="radio" name="Fluroscopy" id="flexRadioDefault2" value=1 v-model="patientData.ca">
                    <label class="form-check-label" for="flexRadioDefault2">1</label>
                    <input class="form-check-input" type="radio" name="Fluroscopy" id="flexRadioDefault3" value=2 v-model="patientData.ca">
                    <label class="form-check-label" for="flexRadioDefault4">2</label>
                    <input class="form-check-input" type="radio" name="Fluroscopy" id="flexRadioDefault3" value=3 v-model="patientData.ca">
                    <label class="form-check-label" for="flexRadioDefault4">3</label>
                </div>
            </div>

            <div class="input-wrap">
                <label for="thal">thal:</label>
                <div>
                    <input class="form-check-input" type="radio" name="Thal" id="flexRadioDefault1" value=1 v-model="patientData.thal">
                    <label class="form-check-label" for="flexRadioDefault1">normal</label>
                    <input class="form-check-input" type="radio" name="Thal" id="flexRadioDefault2" value=2 v-model="patientData.thal">
                    <label class="form-check-label" for="flexRadioDefault2">fixed defect</label>
                    <input class="form-check-input" type="radio" name="Thal" id="flexRadioDefault3" value=3 v-model="patientData.thal">
                    <label class="form-check-label" for="flexRadioDefault3">reversible defect</label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default{
    name : "addPatient",
    data(){
        return{
            patientData : {
                name : "",
                age : 0,
                sex : "Male",
                cp : 1,
                trestbps : undefined,
                chol: undefined,
                fbs:0,
                restecg : 0,
                thalach : undefined,
                exang : 0,
                oldpeak : undefined,
                slope : 1,
                ca : 0,
                thal : 0
            }
            
        }
    },
    methods : {
        handleAddPatient: function (){
            console.log(this.patientData)
    }}
}
</script>

<style>

.wrapper{
    width: 80vw;
    margin: auto;
    border: 1px solid grey;
    border-radius: 10px;
}
label{
    font-size: 1.4rem;
}
.form-check-label{
    margin: 1%;
    font-size: 1rem;
}

.input-wrap{
    margin: 5vh;
}

button{
    padding : 1vh 2vw;
    margin : 3vh 2vw;
    border : none;
    border-radius : 5px;
    background : red;
    color: white;
    text-decoration: none;
}

input{
    border: none;
    border-bottom: 1px solid grey;
    margin-left: 2vw;
}

@import "~bootstrap/dist/css/bootstrap.css"
</style>