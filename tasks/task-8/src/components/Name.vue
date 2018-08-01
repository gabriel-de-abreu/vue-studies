<template>
    <div>
        <div class = "form-group">
            <label for="firstName">First Name</label>
            <input @keyup="update" id="firstName" class = "form-control" type="text" v-model='firstName'>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input @keyup="update" id="lastName" class = "form-control"  type="text" v-model="lastName">
        </div>
    </div>
</template>

<script>
export default {
    props:['value'],

    data(){
        return{
            firstName:'',
            lastName:''
        }
    },
    methods:{
        update(){
            console.log(this.firstName,this.lastName)
            this.$emit('input', (this.firstName + ' ' + this.lastName));
        }
    }
}
</script>

<style scoped>

</style>

