<script >

export default{
  data(){
    return{
      message: 'welcome xiong .',
      myname : 'bruce lee',
      sum:0
    }
  },
  methods:{
    printMeg : function (){
      console.log(`my name : ${this.myname}`)
    },
    count: function(){
      this.sum++
    }
  },
  mounted(){
    console.log('hi,ready start!!!')
    this.sum =10
  }

}
</script>

<template>
<h1>{{message}}</h1>
<h2>my name is : {{ myname }}</h2>
<input type="button" value="click it" @click="count"> {{ sum }}
</template>

<style scoped>

</style>
