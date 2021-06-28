<template>
  <WebMap />
  <div class="footer">
    <calcite-action
      appearance="solid"
      dir="ltr"
      icon="beaker"
      label="Label"
      scale="m"
      text="Text"
      text-enabled=""
      class="calcite-theme-light"
    ></calcite-action>
  </div>
</template>

<script>
import {
  applyPolyfills,
  defineCustomElements
} from "@esri/calcite-components/dist/loader";
import WebMap from './components/WebMap.vue'

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default {
  name: 'App',
  components: {
    WebMap
  }
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  letter-spacing: 0em;
  font-family: "Avenir Next", "Helvetica Neue", sans-serif;
  font-feature-settings: "liga" 1, "calt" 0;
}

#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.footer {
  width: 100%;
  height: 25%;
}
</style>
