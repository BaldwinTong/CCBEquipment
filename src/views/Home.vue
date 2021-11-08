<template>
  <div>
    <van-nav-bar title="首页" />

    <div class="homepage">
      <!-- <div class="top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div> -->
      <div class="iconList">
        <div class="item" @click="toLink({path:'/deal'})">
          <img src="../assets/deal.png" alt="" />
          <div class="title">交易账单</div>
        </div>
        <div class="item" @click="toLink({path:'/bill'})">
          <img src="../assets/bill.png" alt="" />
          <div class="title">交易流水</div>
        </div>
        <div class="item" @click="toLink({path:'/white'})">
          <img src="../assets/whiteList.png" alt="" />
          <div class="title">白名单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    toLink(e){
      this.$router.push(e.path)
    }
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.homepage {
  padding: 0 16px;
  margin-top: 20px;
  box-sizing: border-box;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

  .iconList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 64px;
        height: 64px;
      }
      .title{
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }
}
</style>