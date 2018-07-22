new Vue({
    el: "#app",
    data:{
        monsterHealth: 100,
        playerHealth:100,
        isRunning:false,
        waitingToEnd:false,
        logs: []
    },
    methods:{
        startGame(){
            if(this.waitingToEnd){
                this.endGame();   
            }
            this.isRunning = true;
            this.logs.push({turn:'start',message:'The battle has started!'});
        },
        endGame(){
            this.monsterHealth=100;
            this.playerHealth=100;
            this.isRunning = false;
            this.waitingToEnd = false;
            this.logs=[];
        },
        monsterAttack(){
            if(this.monsterHealth<=0){
                return;
            }
            var damage=this.randomNumber(10,15);
            this.playerHealth-=damage;
            this.logs.push({turn:'monster', message:`Monster attacks player causing ${damage} damage !`});
        },
        playerAttack(){
            var damage=this.randomNumber(1,10);
            this.monsterHealth-=damage;
            this.logs.push({turn:'player',message:`Player attacks monster causing ${damage} damage!`});
            this.monsterAttack();
        },
        playerHeal(){
            var healing = this.randomNumber(10,15);
            
            if(this.playerHealth<10){
                var chance = this.randomNumber(1,1000);
                if(chance > 500){
                    healing=this.randomNumber(15,40);
                }
            }
            this.playerHealth+=healing;
            this.logs.push({turn:'player',message:`Player heals himself recovering ${healing} HP!`});
            this.monsterAttack();
        },
        playerSpecialAttack(){
            if(this.playerHealth<=7){
                this.logs.push({turn:'player',message:"You can't do a special attack with less than 7 HP!"});
                return;
            }
            var damage = this.randomNumber(15,30);
            var hpUsed = this.randomNumber(1,7);
            this.monsterHealth-= damage;
            this.playerHealth-= hpUsed;
            this.logs.push({turn:'player',message:`Player does a special attack, using ${hpUsed} HP to cause ${damage} damage`});
            this.monsterAttack();
        },
        randomNumber(min,max){
            return Math.ceil(Math.random() * max -  min) + min;
        }
    },
    watch:{
        monsterHealth: function(){
            if(this.monsterHealth<=0 && this.isRunning){
                this.isRunning=false;
                alert('You Won!');
                this.logs.push({turn:'start',message:'Congratulations! You Won!'});
                this.waitingToEnd=true;
            }
        },
        playerHealth: function(){
            if(this.playerHealth<=0 && this.isRunning){
                this.isRunning=false;
                alert('You Lost!');
                this.logs.push({turn:'monster',message:'You Lost!'});
                this.waitingToEnd=true;
            }
        }
    }
});