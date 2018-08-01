 <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
<template>
    <div class="container">
        <form v-if="!sent">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h1>User Data</h1>
                        </div>
                    <div class="panel-body">
                    <div class = "form-group">
                        <label for="firstName">First Name</label>
                        <input id="firstName" class = "form-control" type="text" v-model='firstName'>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input id="lastName" class = "form-control"  type="text" v-model="lastName">
                    </div>
                    <div class = "form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" v-model="mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="storeData">Store data ?</label>
                        <div class="form-group" id= "storeData">
                            <label for="yes" >
                                <input type="radio" value="Yes" id="yes" v-model="store">
                                Yes
                            </label>
                            <label for="no" >
                                <input type="radio" value="No" id="no" v-model="store">
                                No
                            </label>
                        </div>
                        <div class="form-group">
                            <button @click.prevent="sent=true" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="sent">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{firstName}} {{lastName}}</p>
                        <p>Mail: {{mail}} </p>
                        <p>Password: {{password}} </p>
                        <p>Store in Database?: {{store}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      mail: "",
      password: "",
      store: "Yes",
      sent: false
    };
  }
};
</script>

<style>
    body{
        padding: 20px;
    }
</style>
