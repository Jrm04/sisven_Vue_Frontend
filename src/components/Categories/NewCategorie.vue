<template>
<div class="container text-start">
    <h1 class="text-primary fw-bold">New</h1>
    <div class="card">
        <div class="card-header fw-bold">
            Categorie
        </div>
        <div class="card-body">
            <form @submit.prevent="saveCategorie">
            <div class="row mb-3">

                <label for="id" class="form-label">Categorie Id: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="Categorie Id"
                          v-model="categorie.id" 
                          >
                </div>
            </div>

            <div class="row mb-3">
                <label for="name" class="form-label">Categorie Name: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="Categorie Name"
                         v-model="categorie.name"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Categorie Description: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="description" placeholder="Categorie Description"
                         v-model="categorie.description"
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
    name: 'CategorieEdit',
    data(){
        return{
            categorie:{
                id:0,
                name:'',
                description:''
            },
            categories: []
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Categories'})
        },

        async saveCategorie(){
            this.categorie.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/categories/`, this.categorie)
            console.log(res);
            if(res.status == 200){
                this.$router.push({name: 'Categories'})
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    tittle: 'Categories has been saved',
                    showConfirmButton: false,
                    timer: 200
                })
            }
        }
    },

    mounted(){
        axios.get(`http://127.0.0.1:8000/api/categories/`).then(response => {
            this.categories = response.data.categories
        })
    },
}
</script>