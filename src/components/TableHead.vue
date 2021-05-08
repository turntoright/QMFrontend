<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="15" :offset="1">
        <el-link type="primary">Send</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">Print</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">Delete</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">Accept</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">Decline</el-link>
      </el-col>
      <el-col :span="4">
        <p class="info">6 items, 1,724.15</p>
      </el-col>
      <el-col :span="1">
        <p class="nzd info">NZD</p>
      </el-col>
      <el-col :span="3">
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">Search</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TableHead",
};
</script>

<style>
.nzd {
  color: dodgerblue;
}
.info {
  font-size: 15px;
}
</style>