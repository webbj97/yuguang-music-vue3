<!--  -->
<template>
    <header class="main-header">1</header>
</template>

<script>
export default {
    setup(props) {
        console.log("props:", props);
        return {};
    },
};
</script>
<style lang='scss'>
.main-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid #ddd;
    height: $header-height;
}
</style>