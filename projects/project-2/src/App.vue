<template>
    <div class="container">
        <app-header :quoteCount ='quotes.length' :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"  @quoteDeleted= "deleteQuote"></app-quote-grid>
        <div class = "row">
            <div class = "col-sm-12 text-center">
                <div class = "alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import appQuoteGrid from './components/QuoteGrid.vue'
    import appNewQuote from './components/NewQuote.vue'
    import appHeader from './components/Header.vue'
    
    export default {
        data: ()=>{
            return {
                quotes:['Just some content!'],
                maxQuotes:10,
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please delete quotes first!')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appQuoteGrid,
            appNewQuote,
            appHeader
        }
    }
</script>

<style>
</style>
