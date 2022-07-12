<template>
    <div class="main-container">
        <Header />
        <div class="container-wrapper">
            <Nav class="main-nav" />
            <div class="main-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@components/header";
import Nav from "@components/nav";
export default {
    components: { Header, Nav },
};
</script>

<style lang="scss">
.main-container {
    padding-top: $header-height;
    height: 100vh;
    overflow: hidden;
    .container-wrapper{
        display: flex;
        height: 100%;
        padding-left: $nav-width;
    }
    .main-content{
        width: 100%;
        height: 100%;
        border: 1px solid green;
    }
}
</style>
