<template>
<div class="container" id="Categorie">
    <h1>Categories List</h1>
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
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'


export default{

    name: 'Categorie',
    data(){
        return{
            categories: []
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/categories').then(response => {this.categories = response.data.categories;
        });
    },

}

</script>