new Vue({
    el : "#exercise",
    data: {
        name : 'Gabriel',
        age : 21,
        imageLink:'https://media.istockphoto.com/photos/red-apple-picture-id495878092'
    },
    methods: {
        ageTimes3: function(){
            return this.age * 3;
        },
        randomNumber: function(){
            return Math.round(Math.random() * 100);
        }
    }
});