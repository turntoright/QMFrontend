<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3579e3"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Dashboard</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Business</template>
      <router-link to="/quotes/list">
        <el-menu-item index="2-1">Quotes</el-menu-item>
      </router-link>
      <el-menu-item index="2-2">Invoice</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
</style>
