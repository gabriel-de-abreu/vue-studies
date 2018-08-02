
<template>
  <div>
    <div v-myOn="{color:'green'}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
    <div v-myOn.delayed="{color:'green',delay:700}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
    <div v-myOn.delayed.defaultColor="{color:'blue',delay:500,default:'red'}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
    <div v-myOn.delayed="{color:'red',delay:2000}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
    <div v-myOn.delayed.defaultColor="{color:'red',delay:2000,default:'blue'}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
    <div v-myOn.delayed.defaultColor="{color:'red',delay:2000,default:'purple'}">
      <h1>Directives Exercise</h1>
      <p>Dummy Text</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  directives: {
    myOn: {
      bind(el, binding, vnode) {
        if (
          binding.modifiers["delayed"] &&
          typeof binding.value.delay === "number"
        ) {
          console.log(`background-color ${binding.value.delay}ms`);
          el.style.transition = `background-color ${binding.value.delay}ms`;
        }
        if (binding.modifiers["defaultColor"]) {
          el.style.backgroundColor = binding.value.default;
        }
        el.addEventListener("mouseenter", () => {
          el.style.backgroundColor = binding.value.color;
        });
        el.addEventListener("mouseleave", () => {
          if (binding.modifiers["defaultColor"]) {
            el.style.backgroundColor = binding.value.default;
          }else{
            el.style.backgroundColor = "";
          }
        });
      }
    }
  }
};
</script>

<style>
</style>
