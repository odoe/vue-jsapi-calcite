<template>
    <div class="map-div"></div>
</template>

<script>
export default {
    name: 'WebMap',
    async mounted() {
        const app = await import('../data/map');
        app.initialize(this.$el);
    }
};
</script>

<style lang="scss">
$icomoon-font-path: "./assets/esri/themes/base/icons/fonts" !default;
$calcite-fonts-path: "./assets/esri/themes/base/fonts/fonts/" !default;
@import "~@arcgis/core/assets/esri/themes/light/main.scss";
.map-div {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>