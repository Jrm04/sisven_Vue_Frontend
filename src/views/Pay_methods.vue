<template>
<div class="container" id="Pay_methods">
    <h1>Pay Methods List |
    <button @click="newPay_method()" class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
    </button>
    </h1>
    <table class="table table-hover">
        <thead class="table-success"> 
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Other Details</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pay_method in pay_methods">
                <th class="table-success" scope="row"> {{ pay_method.id }}</th>
                <td>{{ pay_method.name }}</td>
                <td>{{ pay_method.other_details }}</td>
                <td>
                    <button @click="deletePay_method(pay_method.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editPay_method(pay_method.id)"
                        class="btn btn-warning mx-2">
                        <font-awesome-icon icon="pencil" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default{

    name: 'Pay_method',
    data(){
        return{
            pay_methods: []
        }
    },
    methods:{
        deletePay_method(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the Pay Method whith id ${id} ?` ,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result)=>{
                    if(result.isConfirmed) {
                        axios.delete(`http://127.0.0.1:8000/api/paymethod/${id}`)
                        .then(response => {
                            if(response.data.success){
                                Swal.fire('Delete!! ', '', 'success')
                                this.pay_methods = response.data.pay_methods
                            }
                        })
                    }
                })
        },
        editPay_method(id){
            this.$router.push({name: 'EditPay_method', params: { id: `${id}`}})
        },
        newPay_method(){
            this.$router.push({name: 'NewPay_method'});
        }

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/paymethod').then(response => (this.pay_methods = response.data.pay_methods));
    },

}

</script>