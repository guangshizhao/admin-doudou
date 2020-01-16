<template>
<div  id='login'>
    <v-card
        class="box-card"
        max-width="400"
    >
    <v-card-text>
    <v-form
      ref="form"
    >
        <v-text-field
            clearable
            :counter="10"
            v-model="form.user"
            @keyup.enter="onSubmit"
            label="名字"
        ></v-text-field>
        <v-text-field
            v-model="form.passWord"
            label="密码"
            :append-icon="form.show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="form.show1 ? 'text' : 'password'"
            @click:append="form.show1 = !form.show1"
            @keyup.enter="onSubmit"
        ></v-text-field>
    </v-form>
      <v-btn outlined   type="primary" @click="onSubmit">立即进入</v-btn>
    </v-card-text>
  </v-card>
  <v-snackbar
      v-model="snackbar"
      :top=true
      :timeout=2000
    >
      请随意输入用户名和密码
      <v-btn
        text
        color="pink"
        @click="snackbar = false"
      >
        关闭
      </v-btn>
   </v-snackbar>
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
        show1: false,
        user: 'li',
        passWord: '23'
      },
      snackbar: false
    }
  },
  methods: {
    onSubmit () {
      if (this.form.user && this.form.passWord) {
        this.$store.commit('setState')
        sessionStorage.setItem('user', this.$store.state.user.userState)
        this.$router.push({ path: '/' })
      } else {
        this.snackbar = true
      }
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
background-position: center 0;
background-attachment:fixed;
background-size: cover;
}
.box-card{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  width: 400px;
}
</style>
