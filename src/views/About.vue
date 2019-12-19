<template>
  <div class="about">
    <h1>This is an about page</h1>
     <v-btn @click="logOut" type="danger">注销账号</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    logOut () {
      sessionStorage.removeItem('user')
      //   this.$router.push('/', () => {})
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
