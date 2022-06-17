<template>
<div class="layout">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace icon="customer-visit" to="/customerVisit">客户拜访</van-tabbar-item>
      <van-tabbar-item replace icon="map-distribution" to="/mapDistribution">地图分布</van-tabbar-item>
      <van-tabbar-item replace icon="work-assistant" to="/assistant">工作助手</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    assistant () {
      this.active = 3
      this.$router.push('/assistant')
    }
  }
}
</script>

<style>

</style>