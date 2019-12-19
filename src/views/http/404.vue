<template>
<div class="main-box">
    <div>
        <h1>404</h1>
        <h2 class="error-message" data-v-2bf47796="">This page could not be found</h2>
        <p>
            <router-link class='to-link'  to="/">迷路了?我给你带路</router-link>
        </p>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
    .main-box{
        width: 100%;
        height:100%;
        color: #555;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-box h1{
        font-size:10em;
        font-weight: 100
    }
    .main-box h2{
        font-size:2em;
        font-weight: 100
    }
    .main-box p{
        margin-top:20px
    }
    .to-link{
        color: #000000;
    }
</style>
