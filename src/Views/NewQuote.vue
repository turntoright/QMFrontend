<template>
  <div class="container">
    <Title titleText="New Quote"></Title>
    <el-main
      style="border: 2px solid; border-radius: 10px; border-style: outset"
    >
      <el-row>
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="top"
        >
          <el-col :span="5">
            <el-form-item label="Customer">
              <el-input v-model="form.customer_id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Quote Number">
              <el-input v-model="form.quote_number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Date">
              <el-date-picker
                type="date"
                placeholder="Select Date"
                v-model="form.create_date"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Expiry Date">
              <el-date-picker
                type="date"
                placeholder="Select Date"
                v-model="form.expiry_date"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Reference">
              <el-input v-model="form.reference"></el-input>
            </el-form-item>
          </el-col>
          <div id="addTitle" @click="showTitle" v-if="!isShowTitle">
            <el-link type="primary">+Add a Title & Summary</el-link>
          </div>
          <el-col :span="16" v-if="isShowTitle">
            <el-form-item label="Title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16" v-if="isShowTitle">
            <el-form-item label="Summary">
              <el-input
                type="textarea"
                v-model="form.summary"
                size="medium"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <el-row>
        <QuoteItems :propItems="getQuoteItems"></QuoteItems>
      </el-row>
      <!-- <el-table
        :data="itemTableData"
        style="width: 100%"
        max-height="500"
        border
        :cell-style="{ padding: '0', height: '30px' }"
      >
        <el-table-column fixed prop="item_code" label="Item" width="160">
          <template slot-scope="scope">
            <el-input
              size="small"
              style="text-align: center"
              v-model="scope.row.item_code"
              controls-position="right"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          prop="description"
          label="Description"
          width="200"
        >
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
        <el-table-column fixed prop="amount" label="Amount" width="150">
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
            <el-col :span="3">0.00</el-col>
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
      </el-row> -->
      <el-row>
        <el-form>
          <el-row>
            <el-col :span="16">
              <el-form-item label="Terms">
                <el-input
                  type="textarea"
                  v-model="form.terms"
                  size="small"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>
      <el-divider></el-divider>
      <div class="row">
        <div class="col" id="saveBt">
          <el-button type="primary" @click="handleSaveClick()">Save</el-button>
        </div>
        <div class="col" id="sendBt">
          <el-button type="success">Send...</el-button>
          <el-button type="info" @click="handleCancelClick()">Cancel</el-button>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import { getAPI } from "../axios-api";
import Title from "../components/QuoteTitle";
import QuoteItems from "../components/QuoteItems";
import router from "../routers";

export default {
  data() {
    return {
      form: {
        customer_id: "",
        create_date: new Date(),
        expiry_date: null,
        quote_number: "",
        reference: "",
        title: "",
        summary: "",
        terms: "",
        status: "Draft",
        items: [],
      },
      isShowTitle: false,
      itemTableData: [
        {
          item_code: "item001",
          description: "item description",
          quantity: 5.0,
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
      ],
    };
  },

  components: {
    Title,
    QuoteItems,
  },

  computed: {
    getIsShowTitle: function () {
      return this.$data.isShowTitle;
    },
    getQuoteItems: function () {
      return this.itemTableData;
    },
  },

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
    handleSaveClick: function () {
      if (this.$data.form) {
        let postData = {
          customer_id: this.$data.form.customer_id,
          quote_number: this.$data.form.quote_number,
          expiry_date: this.$data.form.expiry_date,
          reference: this.$data.form.reference,
          title: this.$data.form.title,
          summary: this.$data.form.summary,
          terms: this.$data.form.terms,
          items: this.$data.itemTableData,
        };
        getAPI
          .post("api/quotes/", postData)
          .then((response) => {
            // console.log(response.data);
            if (response.data) {
              router.replace({
                name: "eidtquote",
                params: { id: response.data.id },
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    handleCancelClick: function() {
      router.replace({
        name: 'quotes'
      })
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}
#addTitle {
  text-align: left;
}
#addNew {
  margin-top: 20px;
}
#addNewBt {
  text-align: left;
}
.totalCount {
  text-align: right;
}
#saveBt {
  text-align: left;
}
#SendBt {
  text-align: right;
}
</style>