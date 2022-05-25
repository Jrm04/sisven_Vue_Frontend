<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card-header fw-bold">
            Pay Method
        </div>
        <div class="card-body">
            <form @submit.prevent="updatePay_method">

                <div class="row mb-3">

                    <label for="id" class="form-label">Pay Method Id: </label>

                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="tag" />
                        </div>
                        <input type="text" class="form-control" id="id" placeholder="Pay Method Id" disabled
                            v-model="pm.id">
                    </div>
                </div>

                <div class="row mb-3">

                    <label for="nombre" class="form-label">Pay Method Name: </label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="building" />
                        </div>
                        <input type="text" class="form-control" id="name" placeholder="Pay Method Name"
                            v-model="pm.name">
                    </div>
                </div>

                <div class="row mb-3">

                    <label for="other_details" class="form-label">Pay Method Other Details: </label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="bank" />
                        </div>
                        <input type="text" class="form-control" id="other_details" placeholder="Pay Method Other Details"
                            v-model="pm.other_details">
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Update</button>
                <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: 'EditPay_method',
    data() {
        return {
            pm: {
                id: 0,
                name: '',
                other_details: ''
            },
            pay_methods: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Pay_methods' })
        },

        async updatePay_method() {

            const res = await axios.put(`http://127.0.0.1:8000/api/paymethod/${this.pm.id}`, this.pm)
            if (res.status == 200) {
                this.$router.push({ name: 'Pay_methods' })
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    tittle: 'Categorie has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted() {
        this.pm.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/paymethod/${this.pm.id}`).then(response => {
            this.pm = response.data.pm;
            this.pay_methods = response.data.pay_methods
        })
    },
}
</script>