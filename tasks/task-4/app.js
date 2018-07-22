new Vue({
    el: '#exercise',
    data: {
        effectOn:false,
        progress:0,
        styleClass:"",
        styleClass2:"red-block",
        status:true,
        size:100
    },
    methods: {
      startEffect: function() {
        setInterval(()=>{
            this.effectOn = !this.effectOn;
        },800);
      },
      startProgress: function(){
          this.progress=0;
          setInterval(()=>{
            if(this.progress<500){
                this.progress++;
            }
          },10);
      }
    }
  });
  