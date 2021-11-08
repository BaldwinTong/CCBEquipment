<template>
  <div class="bill">
    <van-nav-bar
      title="账单流水"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      safe-area-inset-top
    />

    <div class="top-date">
      <div
        class="date-item"
        v-for="item in 12"
        :key="item"
        @click="handleClick(item)"
      >
        <div :class="Highlight == item ? 'active' : ''">
          <div class="num">{{ item >= 10 ? item : "0" + item }}</div>
          <div class="month">月</div>
        </div>
      </div>
    </div>
    <div class="data">
      <div class="data-item" v-for="item in dataList" :key="item.id">
        <div class="title">
          <div class="dot"></div>
          <div class="date">{{ item.date }}</div>
        </div>
        <div class="item">
          <div class="item-top">
            <div class="top-left">
              <div class="top-info">
                <span class="info-title">交易产品：</span>
                <span class="info-text">{{ item.productName }}</span>
              </div>
              <div class="top-info">
                <div class="info-title">交易单价：</div>
                <div class="info-text">{{ item.price }}元/斤</div>
              </div>
              <div class="top-info">
                <div class="info-title">是否需要审核：</div>
                <div class="info-text">{{ item.ischeck ? "是" : "否" }}</div>
              </div>
            </div>

            <div class="top-right">
              <div class="top-info">
                <span class="info-title">交易重量：</span>
                <span class="info-text">{{ item.weight }}吨</span>
              </div>

              <div class="top-info">
                <div class="info-title">交易对象：</div>
                <div class="info-text">{{ item.toPeople }}</div>
              </div>

              <div class="top-info">
                <div class="info-title">审核人员：</div>
                <div class="info-text">{{ item.checkPeople }}</div>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="item.status">
            <div class="bot-left">
              <div class="info-title">总价：</div>
              <div class="info-text">￥{{ item.totalPrice }}</div>
            </div>
            <div class="bot-right checking" v-if="item.status == 1">审核中</div>
            <div class="bot-right wasCheck" v-if="item.status == 2">已审核</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      Highlight: 1,
      dataList: [
        {
          id: 1,
          date: "2021-1-03",
          product: "大白菜",
          weight: "30",
          price: "2.60",
          toPeople: "王二锤",
          ischeck: false,
          checkPeople: "无",
          totalPrice: "40000",
          status: 0,
        },
        {
          id: 2,
          date: "2021-1-02",
          product: "小白菜",
          weight: "25",
          price: "3.10",
          toPeople: "王三锤",
          ischeck: true,
          checkPeople: "王大锤",
          totalPrice: "60000",
          status: 1,
        },
        {
          id: 3,
          date: "2021-1-01",
          product: "包白菜",
          weight: "32",
          price: "2.78",
          toPeople: "王三锤",
          ischeck: true,
          checkPeople: "王大锤",
          totalPrice: "90000",
          status: 2,
        },
      ],
    };
  },
  created() {},
  methods: {
    onClickLeft() {
       this.$router.go(-1);
    },
    handleClick(e) {
      this.Highlight = e;
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.top-date {
  width: 100%;
  height: 70px;
  background-color: #1977fc;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  .date-item {
    flex-shrink: 0;
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    .active {
      flex-shrink: 0;
      width: 45px;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #333333;
      font-size: 14px;
      background-color: #fff;
      border-radius: 6px;
      .month {
        color: #818285;
      }
    }
  }
}
.top-date::-webkit-scrollbar {
  display: none !important;
}
.top-date::-moz-scrollbar {
  display: none !important;
}

.data {
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  .data-item {
    width: 100%;
    border-left: 1px solid #e6f3f7;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
    .title {
      display: flex;
      align-items: center;
      position: absolute;
      top: -5px;
      left: -5px;
      .dot {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #419afe;
        box-sizing: border-box;
      }
      .date {
        margin-left: 10px;
        color: #999999;
        font-size: 14px;
      }
    }
    .item {
      width: 100%;
      background-color: #f7f7f7;
      padding: 12px 10px;
      box-sizing: border-box;
      border-radius: 4px;
      .item-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        .top-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 10px;
          .info-title {
            color: #666666;
            font-size: 14px;
          }
          .info-text {
            color: #333333;
            font-size: 14px;
            margin-left: 6px;
          }
        }
      }
      .item-bottom {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bot-left {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          color: #666666;
          font-size: 14px;
          .info-text {
            font-size: 24px;
            color: #fd4d4d;
          }
        }
        .bot-right {
          width: 72px;
          height: 32px;
          color: #fff;
          font-size: 14px;

          border-radius: 32px;
          text-align: center;
          line-height: 32px;
        }
        .checking {
          background-color: #fea921;
        }
        .wasCheck {
          background-color: #04c350;
        }
      }
    }
  }
}
</style>