<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../assets/imgs/logo.svg" alt="logo" />
        <h1 v-show="!collapsed">Vue3 Admin</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <home-outlined />
          <span>首页</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'
import { HomeOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const collapsed = ref(false)
const selectedKeys = ref(['1'])
</script>

<style lang="scss" scoped>
.layout {
  &-container {
    min-height: 100vh;
  }

  &-header {
    background: #fff;
    padding: 0;
    .trigger {
      padding: 0 24px;
      font-size: 18px;
      line-height: 64px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: $primary-color;
      }
    }
  }

  &-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}

.logo {
  height: 32px;
  margin: 16px;
  display: flex;
  align-items: center;
  img {
    height: 32px;
    margin-right: 8px;
  }
  h1 {
    color: #fff;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>
