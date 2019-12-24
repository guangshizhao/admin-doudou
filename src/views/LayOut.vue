<template>
  <div class='app'>
    <!-- 头部 -->
    <v-app-bar app color="cyan" dark clipped-left>
      <v-toolbar-title>客官您来啦</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" :class="[drawer? '':'tr90']" />
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item,index) in userList"
            :key="`${item.title}_${index}`"
            @click="item.click"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- 左边侧边栏 -->
    <v-navigation-drawer   dark v-model="drawer" app clipped>
     <v-list>
          <router-link tag="span" :to="{name:'Home'}">
            <v-list-item link
            :class="[ 'Home' === $route.name ? 'cyan':'']">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>home</v-list-item-title>
            </v-list-item>
          </router-link>
           <v-list-group
              prepend-icon="account_circle"
              v-for='(item,index) in routerList'
              :key='`${index}_path`'
              style="color:#fff !important"
              :value='item.value'
            >
                <template v-slot:activator>
                  <v-list-item-title>{{item.meta.title}}</v-list-item-title>
                </template>
                <router-link
                  v-for='(childItem,childIndex) in item.children'
                  :key='`${childIndex}_name`'
                  tag="span"
                  :to="{name:`${childItem.name}`}"
                  >
                  <v-list-item link
                  :class="[childItem.name === $route.name ? 'cyan':'']">
                    <v-list-item-title>{{childItem.meta.title}}</v-list-item-title>
                  </v-list-item>
                </router-link>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>

    <!-- 内容部分 -->
    <v-content class="aaaaa">
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- 页脚 -->
    <v-footer color="cyan" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutsDemosBaselineFlipped',
  props: {
    source: String
  },
  data () {
    return {
      drawer: null,
      userList: [
        {
          title: '注销账户',
          click: () => this.logOut()
        }
      ]
    }
  },
  computed: {
    routerList: function () {
      let routerList = JSON.parse(JSON.stringify(this.$store.state.routerList))
      routerList.map(item => {
        item.children.findIndex(e => e.name === this.$route.name) !== -1 ? item.value = true : item.value = false
      })
      return routerList
    }
  },
  methods: {
    routePush (path) {
      this.$router.push({ path })
    },
    /**
     *  @description 注销账户
     */
    logOut () {
      sessionStorage.removeItem('user')
      this.$router.push({ path: '/login' })
    }
  },
  created () {
  }
}
</script>
<style  scoped>
.app{
  width:100%
}
.tr90 {
  transform: rotate(90deg);
}
.aaaaa{
    width: 100%;
}
</style>
