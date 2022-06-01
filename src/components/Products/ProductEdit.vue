<template>
<div class="container text-start">
    <h1 class="text-primary fw-bold">New</h1>
    <div class="card">
        <div class="card-header fw-bold">
            Product
        </div>
        <div class="card-body">
            <form @submit.prevent="EditProduct">
            <div class="row mb-3">

                <label for="id" class="form-label">Product Id: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="Product Id" disabled
                          v-model="product.id" 
                          >
                </div>
            </div>

            <div class="row mb-3">
                <label for="name" class="form-label">Product Name: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                    <input type="text" class="form-control" id="name" placeholder="Product Name"
                         v-model="product.name"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Product Price: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="circledollar" /></div>
                    <input type="text" class="form-control" id="price" placeholder="Product Price"
                         v-model="product.price"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Product Stock: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="check" /></div>
                    <input type="text" class="form-control" id="stock" placeholder="Product Stock"
                         v-model="product.stock"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Categorie: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <select class="form-select" v-model="product.id_categories">
                           <option v-for="categorie in categories" v-bind:value="categorie.id"> {{ categorie.name }}</option>
                    </select>
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
    name: 'ProductEdit',
    data(){
        return{
            product:{
                id:0,
                name:'',
                price: 0,
                stock: 0,
                id_categories: 0
            },
           // products: [],
            categories: [],
            
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Products'})
        },

        async EditProduct(){
            //this.product.id_categorie = this.id_categorie
            console.log(this.product)
            const res = await axios.put(`http://127.0.0.1:8000/api/products/${this.product.id}`, this.product)

            if(res.status == 200){
                this.$router.push({name: 'Products'})
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
        this.product.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/categories/${this.product.id}`).then(response => {
            this.products = response.data.products
            this.categories = response.data.categories
            console.log(response.data.categories)
        })
    },
}
</script>