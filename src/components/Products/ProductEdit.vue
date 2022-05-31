<template>
<div class="container text-start">
    <h1 class="text-primary fw-bold">New</h1>
    <div class="card">
        <div class="card-header fw-bold">
            Product
        </div>
        <div class="card-body">
            <form @submit.prevent="saveProduct">
            <div class="row mb-3">

                <label for="id" class="form-label">Product Id: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                    <input type="text" class="form-control" id="id" placeholder="Product Id"
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
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="price" placeholder="Product Price"
                         v-model="product.price"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Product Stock: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <input type="text" class="form-control" id="stock" placeholder="Product Stock"
                         v-model="product.stock"
                    >
                </div>
            </div>

            <div class="row mb-3">
                <label for="description" class="form-label">Product: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <select class="form-select" v-model="product.id_categorie">
                           <option v-for="categorie in cateogires" v-bind:value="categorie.id"> {{ categorie.id }}</option>
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
            Product:{
                id:0,
                name:'',
                price: 0,
                stock: 0,
                id_categorie: 0
            },
            categories: [],
            id: "0"
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Products'})
        },

        async saveProduct(){
            this.Product.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/products/`, this.Product)
            console.log(res);
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
        axios.get(`http://127.0.0.1:8000/api/categories/`).then(response => {
            this.categories = response.data.categories
        })
    },
}
</script>