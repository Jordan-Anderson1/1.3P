<template>
    <h1>Contact</h1>

    <label for="name">Name</label>
    <input type="text" v-model="name"><br>

    <label for="e-mail">E-mail:</label>
    <input type="email" v-model="email"><br>

    <label for="message">Your Message</label>
    <input type="textarea" v-model="textArea"><br>

    <button @click="submit">Submit</button>
</template>




<script>
    export default{
        data(){
            return{
                textArea: '',
                name: '',
                email: '',

            };
        }
    }

</script>