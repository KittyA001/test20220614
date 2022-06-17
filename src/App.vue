<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/assistant">拜访助手</router-link> -->
    <router-view/>
    <!-- <van-tabbar v-model="active" v-if="$route.query !== 'smoking'">
      <van-tabbar-item icon="customer-visit" @click="$router.push('/')">客户拜访</van-tabbar-item>
      <van-tabbar-item icon="map-distribution" @click="$router.push('/')">地图分布</van-tabbar-item>
      <van-tabbar-item icon="work-assistant" to="/assistant">工作助手</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less">

</style>
