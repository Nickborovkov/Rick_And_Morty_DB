<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <el-card
                style="margin: 10px"
                :body-style="{ padding: '0px' }"
                shadow="hover"
        >
            <img
                    style="width: 100%"
                    :src="item.image"
                    class="characterPhoto"
            >
            <h2>{{item.name}}</h2>
        </el-card>

    </el-col>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<style scoped>

</style>
