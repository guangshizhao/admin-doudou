<template>
<div  id='login'>
    <el-card class="box-card">
        <div slot="header">
            <strong>客官请进!!!</strong>
        </div>
        <el-form ref="form" :model="form" label-width="40px">
            <el-form-item label="用户">
                <el-input  v-model.trim="form.user" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.passWord"  @keyup.enter.native="onSubmit" show-password></el-input>
            </el-form-item>
                <el-button type="primary" @click="onSubmit">立即进入</el-button>
        </el-form>
    </el-card>
<bubbles></bubbles>
</div>
</template>

<script>
import { Bubbles } from 'vue-canvas-effect'
export default {
  name: '',
  components: {
    Bubbles
  },
  data () {
    return {
      form: {
        user: '',
        passWord: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit('setState')
      sessionStorage.setItem('user', this.$store.state.user.userState)
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#login{
  height: 100%;
  background: url('~@/assets/login/loginBg.jpg') no-repeat;
  background-size:100% 100%
}
.box-card{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  width: 400px;
  height:300px;
}
</style>
