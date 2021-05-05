<template>
  <div class="container">
    <el-main>
      <Title :titleText="titleString"></Title>
      <el-row>
        <router-link to="/quotes/new">
          <el-button
            type="primary"
            plain
            style="width: 110px; height: 30px; margin-bottom: 15px"
            >+ New Quote
          </el-button>
        </router-link>
      </el-row>
      <el-tabs v-model="quoteStatus" type="card" @tab-click="handleClick">
        <el-tab-pane label="All" name="All"></el-tab-pane>
        <el-tab-pane :label="getTabLabel.Draft" name="Draft"></el-tab-pane>
        <el-tab-pane :label="getTabLabel.Sent" name="Sent"></el-tab-pane>
        <el-tab-pane :label="getTabLabel.Declined" name="Declined"></el-tab-pane>
        <el-tab-pane :label="getTabLabel.Accepted" name="Accepted"></el-tab-pane>
        <el-tab-pane :label="getTabLabel.Invoiced" name="Invoiced"></el-tab-pane>
      </el-tabs>
      <el-table
        ref="multipleTable"
        :data="computedTableData"
        stripe
        tooltip-effect="dark"
        border
        style="width: 1200px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="canSelectRow"
          :key="Math.random()"
          type="selection"
          width="55"
          :selectable="canSelectRow"
        >
        </el-table-column>
        <el-table-column prop="customer_id" label="Customer" width="120">
        </el-table-column>
        <el-table-column prop="quote_number" label="Number" width="100">
        </el-table-column>
        <el-table-column prop="reference" label="Reference" width="100">
        </el-table-column>
        <el-table-column prop="create_date" label="Date" width="100">
          <template slot-scope="scope">
            {{ scope.row.date | dateDMMMYFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="expiry_date" label="Expiry" width="100">
          <template slot-scope="scope">
            {{ scope.row.date | dateDMMMYFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status" width="80">
        </el-table-column>
        <el-table-column prop="amount" label="Amount" width="120">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
import { getAPI } from "../axios-api";
import Title from "../components/QuoteTitle";

export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      quoteStatus: "All",
      quoteListURL: "api/quotes",
      titleString: "Quotes",
      quotesCount: {
        Draft: 0,
        Sent: 0,
        Declined: 0,
        Accepted: 0,
        Invoiced: 0,
      },
    };
  },

  created() {
    getAPI
      .get(this.quoteListURL, {
        params: this.axiosParams,
      })
      .then((response) => {
        this.tableData = response.data;
        if (this.tableData) {
          for (const key of Object.keys(this.$data.quotesCount)) {
            this.$data.quotesCount[key] = this.tableData.filter(
              (item) => item.status === key
            ).length;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  components: {
    Title,
  },

  computed: {
    // axiosParams() {
    //   const params = new URLSearchParams();
    //   params.append("status", "");
    //   return params;
    // },
    computedTableData: function () {
      if (this.tableData && this.$data.quoteStatus != "All") {
        return this.tableData.filter(
          (item) => item.status === this.$data.quoteStatus
        );
      } else {
        return this.tableData;
      }
    },
    getQuotesCount: function () {
      return this.$data.quotesCount;
    },
    getTabLabel: function () {
      const tabLabel = {
        Draft: `Darft (${this.$data.quotesCount.Draft})`,
        Sent: `Sent (${this.$data.quotesCount.Sent})`,
        Declined: `Declined (${this.$data.quotesCount.Declined})`,
        Accepted: `Accepted (${this.$data.quotesCount.Accepted})`,
        Invoiced: `Invoiced (${this.$data.quotesCount.Invoiced})`,
      };
      return tabLabel;
    },
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick() {
      getAPI
        .get(this.quoteListURL, {
          params: {
            status: this.quoteStatus !== "All" ? this.quoteStatus : "",
          },
        })
        .then((response) => {
          this.tableData = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    canSelectRow() {
      return this.quoteStatus !== "All";
    },
  },
};
</script>

<style scoped>
.el-row {
  text-align: left;
}
.container {
  max-width: 960px;
}
h2 {
  text-align: left;
  margin-bottom: 15px;
}
</style>