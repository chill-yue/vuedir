<template>
  <div class="container">
    <button v-longpress="{ event: handleLongPress }">按住我2秒</button>
  </div>
</template>

<script setup>
const handleLongPress = () => {
  alert("我不知道将去何方，但我已在路上。———《千与千寻》");
};
</script>

<style scoped>
.container {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}
button {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-dark);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}
button:hover {
  background-color: var(--vp-c-brand-dark);
  border-color: var(--vp-c-brand-darker);
}
</style>
