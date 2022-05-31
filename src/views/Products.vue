<template>
<div class="container" id="Categorie">
    <h1>Products List |
    <button @click="newProduct()" class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
    </button>
    </h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Categorie</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products">
                <th scope="row"> {{ product.id }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.id_categories }}</td>
                <td>
                    <button @click="deleteProduct(product.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editProduct(product.id)"
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

    name: 'Product',
    data(){
        return{
            products: []
        }
    },
    methods:{
        deleteProduct(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the Categorie whith id ${id} ?` ,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                }).then((result)=>{
                    if(result.isConfirmed) {
                        axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
                        .then(response => {
                            if(response.data.success){
                                Swal.fire('Delete!! ', '', 'success')
                                this.products = response.data.products
                            }
                        })
                    }
                })
        },
        editProduct(id){
            this.$router.push({name: 'ProductEdit', params: { id: `${id}`}})
        },
        newProduct(){
            this.$router.push({name: 'NewProduct'});
        }

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/products/').then(response => (this.products = response.data.products));
        //
    },

}

</script>