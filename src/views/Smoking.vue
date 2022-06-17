<template>
  <div>
    <van-nav-bar fixed title="吸烟环境建设" left-arrow @click-left="$router.back()"/>
    <van-list class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="fontStyle">
                <span>编号：</span><span>{{ item.number }}</span>
            </div>
            <div class="fontStyle">
                <span>创建时间：</span><span>{{ item.time }}</span>
            </div>
            <div class="fontStyle">
                <span>地址：</span><span>{{ item.address }}</span>
            </div>
            <van-button class="edit" plain size="small" type="primary"> 编辑 </van-button>
        </div>
    </van-list>
    <div class="add">
        <div class="button" @click="$router.push('/created')">创建吸烟环境</div>
    </div>

    <!-- <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="fontStyle">
                <span>编号：</span><span>{{ item.number }}</span>
            </div>
            <div class="fontStyle">
                <span>创建时间：</span><span>{{ item.time }}</span>
            </div>
            <div class="fontStyle">
                <span>地址：</span><span>{{ item.address }}</span>
            </div>
            <van-button class="edit" plain size="small" type="primary"> 编辑 </van-button>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
data() {
    return {
        list: [{
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        },
        {
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        },
        {
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        },
        {
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        },
        {
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        },
        {
            title: '城站街角吸烟室',
            number: 'XXYC-XYC001',
            time: '2022-06-16',
            address: 'XX市XX区红旗街道城角街与建国路交汇235-12号'
        }]
    }
}
}
</script>

<style lang="less" scope>
.list {
    // overflow-y: hidden;
    // scroll-y: hidden;
    margin-top: 90px;
    margin-bottom: 140px;
    .item {
        padding: 30px;
        position: relative;
        border-bottom: 1px solid #ccc;
    }
    .title {
        font-size: 35px;
        // font-weight: bold;
        margin-bottom: 10px;
    }
    .fontStyle {
        font-size: 28px;
        margin-top: 20px;
        color: #888888;
    }
    .van-button--small {
        height: 60px;
        width: 120px;
        border-radius: 50px;
        border-color: #3c87f7;
        background: #eaf1fe;
    }
    .van-button--plain.van-button--primary {
        color: #3c87f7;
    }
    .edit {
        position: absolute;
        right: 30px;
        top: 50px;
    }
    
}
.add {
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 140px;
    box-shadow: 0 0  10px #ccc;

        .button {
            width: calc(100% - 60px);
            height: calc(100% - 50px);
            background: #3c87f7;
            border-radius: 10px;
            color: #fff;
            font-size: 35px;
            text-align: center;
            line-height: 90px;
        }
    }
</style>