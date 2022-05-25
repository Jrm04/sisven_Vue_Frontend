<template>
<div class="container" id="Client">
    <h1>Clients List |
    <button @click="newClient()" class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
    </button>
    </h1>
    <table class="table">
        <thead>
            <tr>
               <th scope="col">id</th>
               <th scope="col">Name</th>
               <th scope="col">Lastname</th>
               <th scope="col">Direction</th>
               <th scope="col">Birth Date</th>
               <th scope="col">Phone Number</th>
               <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients">
                <th scope="row"> {{ client.id }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.lastname }}</td>
                <td>{{ client.direction }}</td>
                <td>{{ client.birth_date }}</td>
                <td>{{ client.phone_number }}</td>
                <td>{{ client.email }}</td>
                <td>
                    <button @click="deleteClient(client.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editClient(client.id)"
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

    name: 'Client',
    data(){
        return{
            clients: []
        }
    },
    methods:{
        deleteClient(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the Client whith id ${id} ?` ,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result)=>{
                    if(result.isConfirmed) {
                        axios.delete(`http://127.0.0.1:8000/api/client/${id}`)
                        .then(response => {
                            if(response.data.success){
                                Swal.fire('Delete!! ', '', 'success')
                                this.clients = response.data.clients
                            }
                        })
                    }
                })
        },
        editClient(id){
            this.$router.push({name: 'EditClient', params: { id: `${id}`}})
        },
        newClient(){
            this.$router.push({name: 'NewClient'});
        }

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/client').then(response => (this.clients = response.data.clients));
    },

}

</script>