<template>
  <div class="home">
    <van-nav-bar
      title="录入白名单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      safe-area-inset-top
    />

    <div class="content">
      <div class="item">
        <div class="title">姓名<span>*</span></div>
        <input type="text" class="inpt" v-model="form.username" placeholder="请输入姓名"/>
      </div>
      <div class="item">
        <div class="title">性别<span>*</span></div>
        <div class="check-box">
          <van-radio-group v-model="form.gender" direction="horizontal">
            <van-radio name="1" icon-size="14px">男</van-radio>
            <van-radio name="2" icon-size="14px">女</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="item">
        <div class="title">年龄<span>*</span></div>
        <input type="text" class="inpt" v-model="form.age" placeholder="请输入年龄"/>
      </div>
      <div class="item">
        <div class="title">身份证号<span>*</span></div>
        <input type="text" class="inpt" v-model="form.identityID" placeholder="请输入身份证号"/>
      </div>
      <div class="item">
        <div class="title">银行卡号<span>*</span></div>
        <input type="text" class="inpt" v-model="form.bankNumber" placeholder="请输入银行卡号"/>
      </div>
      <van-button round type="info" block>提 交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        username: "",
        gender: "1",
        age:"",
        identityID:"",
        bankNumber:"",
      },
    };
  },
  created() {},
  methods: {
    onClickLeft() {
       this.$router.go(-1);
    },
  },
  computed: {},
};
</script>
<style lang="less" scope>
.content {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 25px;
  .item {
    margin-bottom: 20px;
    .title {
      font-size: 14px;
      color: #333333;
      span {
        color: #ff0000;
        font-size: 20px;
        margin-left: 6px;
      }
    }
    .inpt {
      width: 100%;
      height: 44px;
      font-size: 14px;
      border: 1px solid #9ec8ff;
      border-radius: 4px;
      background-color: #fff;
      margin-top: 8px;
      padding: 0 16px;
      box-sizing: border-box;
    }

    .check-box {
      margin: 8px 0 0 10%;
      .van-radio:last-child {
        margin-left: 15%;
      }
    }
  }
}
</style>