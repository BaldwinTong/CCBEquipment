<template>
  <div class="deal">
    <van-nav-bar
      title="产品交易"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      safe-area-inset-top
    />
    <div class="content">
      <div class="cont-item">
        <div class="cont-title">
          <span class="border"></span>
          请填写并选择产品信息
        </div>
        <div class="cont-inpt">
          <van-field
            v-model="form.productName"
            label="产品"
            readonly
            @click="showProductPicker = true"
            required
            placeholder="请选择产品"
            is-link
          />
          <van-field
            v-model="form.price"
            label="单价 (元)"
            required
            type="number"
            @blur="inputPrice"
            placeholder="请输入内容"
          />
          <van-field
            v-model="form.weight"
            label="重量 (吨)"
            required
            @blur="inputWeight"
            type="number"
            placeholder="请输入内容"
          />
          <van-field name="stepper" label="总价 (元)">
            <template #input>
              <div class="totalPrice" v-if=" form.totalPrice"> ￥{{ form.totalPrice }}</div>
              <div class="totalPrice" v-else>{{ form.totalPrice }}</div>
            </template>
          </van-field>
          <div class="bottomline"></div>
        </div>
      </div>
      <div class="cont-item">
        <div class="cont-title">
          <span class="border"></span>
          请填写收款人信息
        </div>
        <div class="cont-inpt">
          <van-field
            v-model="form.payee"
            label="收款人"
            required
            placeholder="请输入内容"
          />
          <van-field
            v-model="form.bankName"
            label="收款银行"
            readonly
            @click="showBankPicker = true"
            required
            placeholder="请选择银行"
            is-link
          />
          <van-field
            v-model="form.CollectionAccount"
            label="收款账号"
            required
            placeholder="请输入银行账号"
          />
          <div class="bottomline"></div>
        </div>
        <div class="btn">
          <van-button type="info" round block>提 交</van-button>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <van-popup v-model="showProductPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="productColumns"
        @confirm="onProductConfirm"
        @cancel="showProductPicker = false"
      />
    </van-popup>
    <van-popup v-model="showBankPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="banlColumns"
        @confirm="onBankConfirm"
        @cancel="showProductPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        productName: "",
        price: "",
        weight: "",
        totalPrice: "",
        payee: "",
        bankName: "",
        CollectionAccount: "",
      },
      productColumns: ["大白菜", "小白菜", "包白菜", "娃娃菜", "西洋菜"],
      banlColumns: [
        "中国建设银行",
        "中国人民银行",
        "中国银行",
        "中国工商银行",
        "中国农业银行",
      ],
      showProductPicker: false, //产品弹窗
      showBankPicker: false, //银行弹窗
    };
  },
  created() {},
  methods: {
    onClickLeft() {
       this.$router.go(-1);
    },
    inputPrice(event) {
      if (this.form.weight) {
        this.form.totalPrice = event.target.value * this.form.weight;
      } else {
        this.form.totalPrice = 0;
      }
    },
    inputWeight(event) {
       if (this.form.price) {
        this.form.totalPrice = event.target.value * this.form.price;
      } else {
        this.form.totalPrice = 0;
      }
    },
    onProductConfirm(value) {
      this.form.productName = value;
      this.showProductPicker = false;
    },
    onBankConfirm(value) {
      this.form.bankName = value;
      this.showBankPicker = false;
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.content {
  width: 100%;
  .cont-title {
    color: #333333;
    font-size: 16px;
    height: 62px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f6f6f6;
    span {
      display: inline-block;
      width: 3px;
      height: 20px;
      background-color: #1977fc;
      margin-right: 10px;
    }
  }
  .cont-inpt {
    padding-left: 16px;
    box-sizing: border-box;

    .totalPrice {
      color: #fd4d4d;
      font-size: 22px;
    }
    .bottomline {
      width: 100%;
    }
  }
  .btn {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
  }
}
</style>