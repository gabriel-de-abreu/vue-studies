<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>        
                <hr>
                <p>{{selectedComponent}}</p>        
                <component :is = "selectedComponent">
                    <p slot = "content">Default content</p>
                </component>
               <!-- <app-quote>
                   <h2 slot = "title">{{quoteTitle}}</h2>
                   <p slot = "content">A wonderful quote!</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import appQuote from "./components/Quote.vue";
import appAuthor from "./components/Author.vue";
import appNew from "./components/New.vue";
export default {
  data: () => {
    return {
      quoteTitle: "The Quote",
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote,
    appAuthor,
    appNew
  }
};
</script>

<style>
</style>
