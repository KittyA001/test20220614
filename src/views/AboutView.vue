<template>
  <div class="assistant">
    <van-nav-bar title="工作助手" left-arrow>
      <van-icon slot="right" name="plus" size="18" />
    </van-nav-bar>
    <div class="container">
        <div class="item">
          <img class="pic" src="" alt=""/>
          <p>客户提醒</p>
        </div>
        <div class="item">
          <img class="pic" src="" alt=""/>
          <p>客户反馈意见</p>
        </div>
        <div class="item">
          <img class="pic" src="" alt=""/>
          <p>经营建议</p>
        </div>
        <div class="item">
          <img class="pic" src="" alt=""/>
          <p>客户资源维护</p>
        </div>
        <div class="item" @click="$router.push({path:'/Smoking',query: 'smoking'})">
          <img class="pic" src="@/assets/images/icon/吸烟环境建设.png" alt=""/>
          <p>吸烟环境建设</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scope>
.container {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  flex-wrap: wrap;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pic {
    width: 100px;
    height: 100px;
  }
}
</style>