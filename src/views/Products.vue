<template>
<div class="container" id="Categorie">
    <h1>Products List |
    <button @click="NewProduct()" class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
    </button>
    </h1>
    <table class="table table-hover ">
        <thead >
            <tr>
                <th class="table-warning" scope="col">Id</th>
                <th class="table-warning" scope="col">Name</th>
                <th class="table-warning" scope="col">Price</th>
                <th class="table-warning" scope="col">Stock</th>
                <th class="table-info"    scope="col">Categorie</th>
                <th class="table-warning"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products">
                <th class="table-warning" scope="row"> {{ product.id }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td class="table-info">{{ product.id_categories }}</td>
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
        NewProduct(){
            this.$router.push({name: 'NewProduct'});
        }

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/products/').then(response => (this.products = response.data.products));
        //
    },

}

</script>

