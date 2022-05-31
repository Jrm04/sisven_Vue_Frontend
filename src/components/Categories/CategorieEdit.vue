<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card-header fw-bold">
            Categorie
        </div>
        <div class="card-body">
            <form @submit.prevent="updateCategorie">

                <div class="row mb-3">

                    <label for="id" class="form-label">Categorie Id: </label>

                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="tag" />
                        </div>
                        <input type="text" class="form-control" id="id" placeholder="Categorie Id" disabled
                            v-model="categorie.id">
                    </div>
                </div>

                <div class="row mb-3">

                    <label for="nombre" class="form-label">Categorie Name: </label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="bookmark" />
                        </div>
                        <input type="text" class="form-control" id="name" placeholder="Categorie Name"
                            v-model="categorie.name">
                    </div>
                </div>

                <div class="row mb-3">

                    <label for="description" class="form-label">Categorie Description</label>
                    <div class="input-group">
                        <div class="input-group-text">
                            <font-awesome-icon icon="align-justify" />
                        </div>
                        <input type="text" class="form-control" id="description" placeholder="Cateogrie Description"
                            v-model="categorie.description">
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
    name: 'CategorieEdit',
    data() {
        return {
            categorie: {
                id: 0,
                name: '',
                description: ''
            },
            categories: []
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Categories' })
        },

        async updateCategorie() {

            const res = await axios.put(`http://127.0.0.1:8000/api/categories/${this.categorie.id}`, this.categorie)
            if (res.status == 200) {
                this.$router.push({ name: 'Categories' })
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
        this.categorie.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/categories/${this.categorie.id}`).then(response => {
            this.categorie = response.data.categorie;
            this.categories = response.data.categories
        })
    },
}
</script>