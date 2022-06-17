<template>
<div>
    <van-nav-bar fixed title="吸烟环境建设" left-arrow @click-left="$router.back()"/>
    <div class="content">
        <van-tabs v-model="active" color="#3c87f7">
            <van-tab title="环境情况">
                <van-form>
                    <van-field
                    v-model="formData.company"
                    name="区县分公司"
                    label="区县分公司"
                    placeholder="请输入"
                    input-align="right"
                    error-message-align="right"
                    required
                    :rules="[{required:true,message:'请输入区县分公司'}]"
                    />
                    <van-field
                    v-model="formData.code"
                    name="区县分公司"
                    label="编号"
                    placeholder="请输入"
                    error-message-align="right"
                    input-align="right"
                    required
                    :rules="[{required:true,message:'请输入编号'}]"
                    />
                    <van-field
                    v-model="formData.name"
                    name="区县分公司"
                    label="名称"
                    error-message-align="right"
                    placeholder="请输入"
                    input-align="right"
                    required
                    :rules="[{required:true,message:'请输入名称'}]"
                    />
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.type"
                    label="类型"
                    placeholder="请选择"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    required
                    @click="showPicker = true"
                    />
                    <van-popup v-model="showPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="types"
                        @confirm="onConfirm"
                        @cancel="showPicker = false"
                    />
                    </van-popup>
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.outOrIn"
                    label="室内/外"
                    placeholder="请选择"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    required
                    @click="showOutOrIns = true"
                    />
                    <van-popup v-model="showOutOrIns" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="outOrIns"
                        @confirm="onConfirmOutOrIns"
                        @cancel="showOutOrIns = false"
                    />
                    </van-popup>
                    <van-field
                    v-model="formData.area"
                    name="区县分公司"
                    label="使用面积㎡"
                    placeholder="请输入"
                    input-align="right"
                    error-message-align="right"
                    required
                    :rules="[{required:true,message:'请输入使用面积'}]"
                    />
                    <div class="line"></div>
                    <!-- 经度 -->
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.longitude"
                    label="经度"
                    placeholder="请设置"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    @click="showLongitude = true"
                    />
                    <van-popup v-model="showLongitude" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="types"
                        @confirm="onConfirm"
                        @cancel="showLongitude = false"
                    />
                    </van-popup>
                    <!-- 纬度 -->
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.latitude"
                    label="纬度"
                    placeholder="请设置"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    @click="showLatitude = true"
                    />
                    <van-popup v-model="showLatitude" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="types"
                        @confirm="onConfirm"
                        @cancel="showLatitude = false"
                    />
                    </van-popup>
                    <!-- 地址 -->
                    <van-field
                    class="address"
                    v-model="formData.address"
                    name="区县分公司"
                    label="地址"
                    placeholder="请输入"
                    type="textarea"
                    required
                    :rules="[{required:true,message:'请输入地址'}]"
                    />
                    <!-- 上传图片 -->
                    <van-uploader class="uploader" upload-text="最多上传3张" v-model="fileList" multiple :max-count="3"/>
                    <div class="line"></div>
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.outOrIn"
                    label="所属商圈"
                    placeholder="请选择"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    @click="showOutOrIns = true"
                    />
                    <van-popup v-model="showOutOrIns" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="outOrIns"
                        @confirm="onConfirmOutOrIns"
                        @cancel="showOutOrIns = false"
                    />
                    </van-popup>
                    <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="formData.outOrIn"
                    label="场地所属权"
                    placeholder="请选择"
                    error-message-align="right"
                    input-align="right"
                    right-icon="arrow"
                    @click="showOutOrIns = true"
                    />
                    <van-popup v-model="showOutOrIns" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="outOrIns"
                        @confirm="onConfirmOutOrIns"
                        @cancel="showOutOrIns = false"
                    />
                    </van-popup>
                    <van-field
                    v-model="formData.company"
                    name="区县分公司"
                    label="建设费用"
                    placeholder="请输入"
                    input-align="right"
                    error-message-align="right"
                    />
                    <!-- 日期区间 -->
                    <van-cell title="施工日期" :value="date" @click="show = true">开始日期 至 结束日期
                    <van-icon name="arrow" style="margin-left: 6px;"/>
                    </van-cell>
                    <van-calendar v-model="show" type="range" @confirm="onConfirm" />
                    <van-field
                    v-model="formData.company"
                    name="区县分公司"
                    label="使用单位"
                    placeholder="请输入"
                    input-align="right"
                    error-message-align="right"
                    />
                    <van-field
                    v-model="formData.company"
                    name="区县分公司"
                    label="维护单位"
                    placeholder="请输入"
                    input-align="right"
                    error-message-align="right"
                    />
                    <van-field
                    class="address"
                    v-model="formData.address"
                    name="区县分公司"
                    label="备注"
                    placeholder="请输入"
                    type="textarea"
                    />
                </van-form>
            </van-tab>
            <!-- 项目情况 -->
            <van-tab title="项目情况">
                <div class="add-item" @click="addItem">
                    <van-icon name="add-o" size="27" color="#3f8bf6"/>
                    <div class="text">添加项目</div>
                </div>
                <div class="item-content" v-for="(item, index) in list" :key="index">
                     <van-field
                    v-model="item.name"
                    name=""
                    label="项目"
                    placeholder="请输入"
                    input-align="right"
                    />
                    <div class="number">
                        <div class="label">
                            <span style="color: red;">*</span>
                            数量</div>
                        <van-stepper v-model="item.number" integer />
                    </div>
                    <van-field
                    v-model="item.unit"
                    name=""
                    label="单位"
                    placeholder="请输入"
                    input-align="right"
                    />
                <div class="lineItem"></div>
                </div>
            </van-tab>
            
        </van-tabs>
        <div class="add">
            <div class="button">保存</div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
        <van-list class="item-list">
            <van-radio-group v-model="radio">
                <van-radio class="radio" shape="square" v-for="item in listItems" :key="item.id" :name="item.id">{{item.name}}</van-radio>
            </van-radio-group>
        </van-list>
        <van-row class="row">
            <van-col class="col-close" span="12">关闭</van-col>
            <van-col class="col-confirm" span="12" @click="confirmFn">确定</van-col>
        </van-row>
        </van-popup>
    </div>
    


</div>

</template>

<script>
export default {
data() {
    return {
        indexList: [1, 2],
        active: 2,
        formData: {
            company: '',
            address: '',
            code: '',
            name: '',
            type: '',
            outOrIn: '',
            area: '',
            longitude: '',
            latitude: ''
        },
        types: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        outOrIns: ['室内','室外'],
        showPicker: false,
        showOutOrIns: false,
        showLatitude: false,
        showLongitude: false,
        fileList: [],
        date: '',
        show: false,
        list: [
            {name:'饮用水',number: 3, unit: '台'},
            {name:'网络通信',number: 3, unit: '-'}
        ],
        show: false,
        listItems:[
            {id: '1',name:'网络通信'},
            {id: '2',name:'遮阳设施'},
            {id: '3',name:'普通行为'},
            {id: '4',name:'网络通信'},
        ],
        radio: '',
        searchValue: ''

    }
},
methods: {
    onConfirm(value) {
      this.formData.type = value;
      this.showPicker = false;
    },
    onConfirmOutOrIns(value) {
        this.formData.outOrIn = value;
      this.showOutOrIns = false;
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    addItem() {
        this.show = true;
        this.radio = ''
    },
    confirmFn() {
        let item = this.listItems.find(item=> item.id === this.radio)
        console.log('item', item)
        this.list.push({name:item.name,number: '', unit: ''})
        this.show = false
    }
}
}
</script>

<style lang="less" scope>
.content {
    margin-top: 100px;
    margin-bottom: 180px;
    .address.van-cell {
            flex-direction: column;
        }
    .van-cell {
        border-bottom: 1px solid #ccc;
        padding-left: 60px;
    }
    .van-cell--required::before {
        left: 35px;
    }
    .van-field__label {
        color: #939393;
    }
    .line,.lineItem {
        width: 100%;
        height: 30px;
        background: #e7e7ec;
    }
    .lineItem {
        height: 20px;
    }
    .uploader {
        margin: 40px 30px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .van-cell__title {
        color: #8a8a8a;
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
    .van-tab--active {
        color: #3c87f7;
    }
    .van-tabs__line {
        width: 50%;
        // color: #ebedf0;
    }
    .van-tabs--line .van-tabs__wrap {
        border-bottom: 1px solid #ebedf0;
    }
    .add-item {
        width: 100%;
        height: 100px;
        background: #fafafa;
        border-bottom: 1px solid #ebedf0;
        display: flex;
        justify-content: center;
        align-items: center;       
        .text {
            margin-left: 20px;
            margin-bottom: 5px;
            color: #3f8af6;
            font-size: 35px;
        }

    }
    .number, .unit {
        display: flex;
        justify-content: space-between;
        padding-left: 40px;
        padding-right: 30px;
        align-items: center;
        // width: 100%;
        height: 90px;
        border-bottom: 1px solid #ccc;
        .van-stepper__input {
            background: #fff;
        }
        .label {
            font-size: 28px;
            color: #8a8a8a;
        }
    }
    .unit {
        padding-left: 60px;
    }
    .van-stepper__minus {
        width: 45px;
        height: 45px;
        border-radius: unset;
        background-color: #fff;
        border: 3px solid #4790e3;
    }
    .van-stepper__plus {
    border-radius: unset;
    background: #418ce2;
    width: 45px;
    height: 45px;
    }
    .van-stepper__plus::after, .van-stepper__plus::before {
        background: #fff;
    }
    .van-stepper__minus::after, .van-stepper__minus::before {
        background: #418ce2;
    }
    .van-search__content {
        padding-left: unset;
        background: #fff;
    }
    .content .van-cell {
        padding-left: 0 !important;
    }
    .item-list {
        padding: 0 40px;
        .radio {
            margin: 30px 0;
        }
    }
    .van-radio__label {
        font-size: 30px;
    }
    .row {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 90px;
        border-top: 1px solid #ccc;
    }
    .col-close, .col-confirm {
        text-align: center;
        line-height: 90px;
        border-right: 1px solid #ccc;
        font-size: 35px;
    }
    .col-confirm {
        border-right: unset;
        color: #418ce2;
    }
}

</style>