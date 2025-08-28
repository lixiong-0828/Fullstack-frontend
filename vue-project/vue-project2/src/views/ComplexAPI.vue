<script setup>

import {ref, onMounted} from "vue"
//import { axios } from "axios";

let message = ref('hello , it is from complex API')
let myname = ref('bluse lee from complex')
let sum = ref(3)

function count (){
    sum.value ++
    
}

let annotateFunc = () =>{
    console.log('from annotate function!!!')
}

onMounted(() =>{
    console.log('it is from onmounted !!!' )
    

})

let changename = () =>{
    myname.value = 'changed name is : xiong'
}

</script>

<template>
<h1>{{message}}</h1>
<h2>my name is : {{ myname }}</h2>
<input type="button" value="click it" @click="count"> : {{ sum }}
<br>
<input type="button" value="annotate function" @click="annotateFunc">
<br>
<input type="button" value="change myname" @click="changename">

</template>

<style scoped>

</style>