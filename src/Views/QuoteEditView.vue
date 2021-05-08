<template>
  <div class="container">
    <Title :titleText="getTitle"></Title>
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
      <QuoteItems :propItems="getQuoteItems"></QuoteItems>
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
      itemTableData: [],
    };
  },

  created() {
    if (this.$route.params && this.$route.params.id) {
      getAPI
        .get("api/quotes/" + this.$route.params.id)
        .then((response) => {
          if (response.data) {
            this.$data.form = response.data;
            this.$data.itemTableData = response.data.items;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    getTitle: function () {
      return "Quote " + this.$data.form.quote_number;
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
        console.log(postData);
      }
    },
    handleCancelClick: function () {
      router.replace({
        name: "quotes",
      });
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