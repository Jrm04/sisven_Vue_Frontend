<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card-header fw-bold">
            <div class="card-header fw-bold">
                Client
            </div>
            <div class="card-body">
                <form @submit.prevent="updateClient">
                    <div class="row mb-3">

                        <label for="id" class="form-label">Client Id: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="tag" />
                            </div>
                            <input type="text" class="form-control" id="id" placeholder="client Id" disabled
                                v-model="client.id">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Client Name: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="building" />
                            </div>
                            <input type="text" class="form-control" id="name" placeholder="Client Name"
                                v-model="client.name">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="lastname" class="form-label">Client Lastname: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="bank" />
                            </div>
                            <input type="text" class="form-control" id="lastname" placeholder="Client Lastname"
                                v-model="client.lastname">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="direction" class="form-label">Client Direction: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="bank" />
                            </div>
                            <input type="text" class="form-control" id="direction" placeholder="Client Direction"
                                v-model="client.direction">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="birth_date" class="form-label">Client Birth Date: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="bank" />
                            </div>
                            <input type="date" class="form-control" id="birth_date"
                                placeholder="Client Birth Date (AA-MM-DD)" v-model="client.birth_date">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone_number" class="form-label">Client Phone Number: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="bank" />
                            </div>
                            <input type="text" class="form-control" id="phone_number" placeholder="Client Phone Number"
                                v-model="client.phone_number">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="email" class="form-label">Client Email: </label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <font-awesome-icon icon="building" />
                            </div>
                            <input type="text" class="form-control" id="email" placeholder="Client Email"
                                v-model="client.email">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Update</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: 'EditClient',
    data() {
        return {
            client: {
                id: 0,
                name: '',
                lastname: '',
                direction: '',
                birth_date: '',
                phone_number: '',
                email: ''

            },
            clients: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Clients' })
        },

        async updateClient() {

            const res = await axios.put(`http://127.0.0.1:8000/api/client/${this.client.id}`, this.client)
            if (res.status == 200) {
                this.$router.push({ name: 'Clients' })
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    tittle: 'Client has been Update',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },

    mounted() {
        this.client.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/client/${this.client.id}`).then(response => {
            this.client = response.data.client;
            this.clients = response.data.clients
        })
    },
}
</script>