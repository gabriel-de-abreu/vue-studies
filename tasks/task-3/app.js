new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeout: 5000
    },
    computed:{
        result: function(){
            if(this.value!=37){
                return 'Not there yet!';
            }else{
                return 'done';
            }
        }
    },
    watch:{
        result:function(){
            var instance = this;
            setTimeout(()=>{
                instance.value = 0;
            },this.timeout);
        }
    }
});