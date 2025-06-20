<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { VPButton } from "vitepress/theme";
import "./custom.css";
import "./not-found.css";

const { Layout } = DefaultTheme;
</script>
<template>
  <Layout>
    <template #not-found>
      <div class="not-found">
        <div>
          <h3 class="title">404</h3>
        </div>
        <div>
          <p class="subtitle">Page not found</p>
        </div>
        <div>
          <VPButton size="big" v-text="`It's all Watame's fault!`"></VPButton>
        </div>
      </div>
    </template>
  </Layout>
</template>
