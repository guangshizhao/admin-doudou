<template>
  <div class="about">
    <h1>This is an about page</h1>
     <el-button @click="logOut" type="danger">注销账号</el-button>
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
