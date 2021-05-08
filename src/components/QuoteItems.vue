<template>
  <el-main>
    <el-table
      :data="itemTableData"
      style="width: 100%"
      max-height="500"
      :cell-style="{ padding: '0', height: '30px' }"
    >
      <el-table-column fixed prop="item_code" label="Item" width="160">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center;"
            v-model="scope.row.item_code"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="description" label="Description" width="200">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.description"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="quantity" label="Quantity" width="80">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.quantity"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="unit_price" label="Unit Price" width="80">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.unit_price"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="disc" label="Discount" width="80">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.disc"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="tax_rate" label="Tax Rate" width="80">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.tax_rate"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed prop="amount" label="Amount" width="120">
        <template slot-scope="scope">
          <el-input
            size="small"
            style="text-align: center"
            v-model="scope.row.amount"
            controls-position="right"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="" width="40">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, itemTableData)"
            type="text"
            size="small"
          >
            X
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row id="addNew" style="width: 100%">
      <el-col id="addNewBt">
        <el-dropdown
          split-button
          type="primary"
          @click="addNewRow(itemTableData)"
        >
          + Add a new line
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              @click.native.prevent="addNewRow(itemTableData, 5)"
              >Add 5</el-dropdown-item
            >
            <el-dropdown-item
              @click.native.prevent="addNewRow(itemTableData, 10)"
              >Add 10</el-dropdown-item
            >
            <el-dropdown-item
              @click.native.prevent="addNewRow(itemTableData, 20)"
              >Add 20</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row class="totalCount">
      <el-col>
        <el-row>
          <el-col :span="3" :offset="17">Subtotal</el-col>
          <el-col :span="3">{{ getSubtotal }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="3" :offset="17">Total GST</el-col>
          <el-col :span="3">0.00</el-col>
        </el-row>
        <el-row>
          <el-col :span="3" :offset="17">Total</el-col>
          <el-col :span="3">0.00</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </el-main>
</template>

<script>
export default {
  name: "quoteItmes",
  props: {
    propItems: {
      type: Array,
      default: function () {
        return [
          {
            item_code: "item001",
            description: "item description",
            quantity: 10.0,
            unit_price: 2.65,
            disc: 0.0,
            tax_rate: 0.0,
            amount: 0.0,
          },
          {
            item_code: "item002",
            description: "item description",
            quantity: 10.0,
            unit_price: 3.5,
            disc: 0.0,
            tax_rate: 0.0,
            amount: 0.0,
          },
        ];
      },
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    itemTableData: function () {
      return this.propItems;
    },
    getSubtotal: function () {
      let res = 0;
      if (this.propItems) {
        for (let i = 0; i < this.propItems.length; i++) {
          res += parseFloat(this.propItems[i].amount);
        }
      }
      return res;
    },
  },
  components: {},

  methods: {
    showTitle: function () {
      this.$data.isShowTitle = true;
    },
    deleteRow: function (index, rows) {
      rows.splice(index, 1);
    },
    addNewRow: function (rows, n = 1) {
      for (let i = 0; i < n; i++) rows.push({});
    },
  },
};
</script>

<style scoped>
#addNew {
  margin-top: 20px;
}
#addNewBt {
  text-align: left;
}
.totalCount {
  text-align: right;
}
.el-table__row .el-input .el-input__inner {
  border-style: none;
}
.hover-row .el-input .el-input__inner {
  border-style: solid;
}
</style>