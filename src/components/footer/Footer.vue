<template>
    <el-footer>
        <el-row justify="center">
            <el-col :xs="24" :sm="12">
                <el-link
                        href="https://rickandmortyapi.com/documentation"
                        type="primary"
                        icon="el-icon-link"
                        target="_blank"
                        class="footerLink"
                        :underline="false"
                >
                    Rick and Morty API
                </el-link>
            </el-col>
            <el-col :xs="24" :sm="12">
                <el-link
                        href="https://github.com/Nickborovkov"
                        type="primary"
                        icon="el-icon-link"
                        target="_blank"
                        class="footerLink"
                        :underline="false"
                >
                    Made by Nick Borovkov
                </el-link>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .footerLink{
        text-align: center;
        display: block;
        width: 180px;
        margin: 10px auto;
    }
</style>
