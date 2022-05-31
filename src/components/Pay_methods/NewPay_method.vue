<template>
<div class="container text-start">
    <h1 class="text-primary fw-bold">New</h1>
    <div class="card">
        <div class="card-header fw-bold">
            Pay Methods
        </div>
        <div class="card-body">
            <form @submit.prevent="savePay_method">
            <div class="row mb-3">

                <label for="id" class="form-label">Pay Methods Id: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="Pay Methods Id"
                          v-model="pay_method.id" 
                          >
                </div>
            </div>

            <div class="row mb-3">
                <label for="name" class="form-label">Pay Methods Name: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="credit-card" /></div>
                    <input type="text" class="form-control" id="name" placeholder="Pay Methods Name"
                         v-model="pay_method.name"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="other_details" class="form-label">Pay Methods Other Details: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="align-justify" /></div>
                    <input type="text" class="form-control" id="other_details" placeholder="Pay Methods Other Details:"
                         v-model="pay_method.other_details"
                    >
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
        </form>
    </div>
</div>
</div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default{
    name: 'EditPay_method',
    data(){
        return{
            pay_method:{
                id:0,
                name:'',
                other_details:''
            },
            pay_methods: []
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Pay_methods'})
        },

        async savePay_method(){
            this.pay_method.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/paymethod/`, this.pay_method)
            console.log(res);
            if(res.status == 200){
                this.$router.push({name: 'Pay_methods'})
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    tittle: 'Categories has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted(){
        axios.get(`http://127.0.0.1:8000/api/paymethod/`).then(response => {
            this.pay_methods = response.data.pay_methods
        })
    },
}
</script>