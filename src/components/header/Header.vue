<template>
    <el-header>
        <el-menu
                mode="horizontal"
                :default-active="this.$route.path"
                :router="true"
        >
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                Home
            </el-menu-item>
            <el-menu-item index="/characters">
                <i class="el-icon-user"></i>
                Characters
            </el-menu-item>
            <el-menu-item index="/locations">
                <i class="el-icon-map-location"></i>
                Locations
            </el-menu-item>
            <el-menu-item index="/episodes">
                <i class="el-icon-picture-outline-round"></i>
                Episodes
            </el-menu-item>
        </el-menu>
    </el-header>
</template>

<!--<el-container class="logo">-->
<!--    <img class="appLogo" src="../../assets/images/appLogo.png" alt="">-->
<!--    <p class="appName">Rick and Morty DB</p>-->
<!--</el-container>-->

<script>
    export default {}
</script>

<style scoped>
</style>
