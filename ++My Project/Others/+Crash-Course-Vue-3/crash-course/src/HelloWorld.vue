<!---View-->
<template>
  <h1>Hello World</h1>
  <p>My name is {{ myName }} and I run {{ channel }}</p>
</template>



<!---Logic-->
<script>
export default {
  data() {
    return {
      myName: "Paan Jampatong",
      channel: "codedamn",
    };
  },

  mounted() {
    console.log(this);
  },
};

something.mounted();
</script>





<!---Style-->
<style scoped>
</style>