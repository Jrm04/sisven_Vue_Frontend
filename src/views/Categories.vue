<template>
<div class="container" id="Categorie">
    <h1>Categories List |
    <button @click="newCategorie()" class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
    </button>
    </h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">DESCRIPTION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="categorie in categories">
                <th scope="row"> {{ categorie.id }}</th>
                <td>{{ categorie.name }}</td>
                <td>{{ categorie.description }}</td>
                <td>
                    <button @click="deleteCategorie(categorie.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editCategorie(categorie.id)"
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
import axios from 'axios'
import swal from 'vue-sweetalert2'

export default{

    name: 'Categorie',
    data(){
        return{
            categories: []
        }
    },
    methods:{
        deleteCategorie(id){
            swal.fire({
                title: `Do you want to delete the Categorie whith id ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result)=>{
                    if(result.isConfirmed) {
                        axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                        .then(response => {
                            if(response.data.success){
                                swal.fire('Delete!! ', '', 'success')
                                this.categories = response.data.categories
                            }
                        })
                    }
                })
        },
        editCategorie(id){
            this.$router.push({name: 'CategorieEdit', params: { id: `${id}`}})
        },
        newCategorie(){
            this.$router.push({name: 'NewCategorie'});
        }

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/categories').then(response => (this.categories = response.data.categories));
    },

}

</script>