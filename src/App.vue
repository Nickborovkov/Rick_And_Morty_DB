<template>
  <div>
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>

  </div>
</template>

<script>
  import Header from "./components/header/Header";
  import Footer from "./components/footer/Footer";

  export default {
    components: {
      Header: Header,
      Footer: Footer,
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: Calibri;
  }
</style>
