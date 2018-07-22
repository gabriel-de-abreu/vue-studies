new Vue({
    el: '#app',
    data:{
        counter : 0, 
        x: 0,
        y: 0
    },
    methods:{
        increase: function(step){
            this.counter+= step;
        },
        updateCoordinate: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe : function(event){
            alert(`${event.target.value}`);
        }
    }
});