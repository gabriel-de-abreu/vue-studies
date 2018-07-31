<template>
    <li>
        <div class= "server" @click="serverSelected" style="cursor:pointer"> 
            <p> Server {{id}}</p>
            <p> Status: {{status}} </p>
            <button @click="setNormal">Change Status</button>
        </div> 
    </li>
</template>

<script>
import { serverBus } from './../main.js'
export default {
    props:['id','status'],
    methods:{
        setNormal(){
            this.status='Normal';
        },
        serverSelected(){
            serverBus.$emit('serverSelected',{id:this.id, status:this.status});
        }
    }
};
</script>

<style scoped>
    .server{
        display: flex;
        align-content: center;
        align-items: center;
        height: 50px;
    }
    p{
        height: 10px;
        /* width: 80px; */
        margin-right: 23%;
        margin-left:10px;
    }
    button {
        /* height: 30px; */
        margin-left: auto;
        margin-right: 10px; 
    }
    li {
        display: list-item;
        list-style: none;
        border: 1px solid lightgrey;
        margin-bottom:   2%;
        text-align: none;
    }
</style>
