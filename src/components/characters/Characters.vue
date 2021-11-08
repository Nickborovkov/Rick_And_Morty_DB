<template>
    <div>
        <h1 class="title">Characters</h1>

        <el-row justify="center" style="width: 90%; margin: 50px auto">
            <CharactersItem
                    :item="item"
                    :key="item.id"
                    v-for="item in getCharactersResults"
            ></CharactersItem>
        </el-row>

        <el-row type="flex" justify="center" style="margin-bottom: 50px">

            <el-button :disabled="getPage === 1"
                       @click="$store.commit(`prevPage`)"
                       type="primary"
            >
                Prev
            </el-button>
            <el-button :disabled="getPage === 42"
                       @click="$store.commit(`nextPage`)"
                       type="primary"
            >
                Next
            </el-button>

        </el-row>

    </div>
</template>

<script>
    import CharactersItem from "./CharactersItem";

    export default {
        created() {
            this.$store.dispatch(`getAllCharacters`, this.getPage)
        },
        watch: {
            getPage () {
                this.$store.dispatch(`getAllCharacters`, this.getPage)
            }
        },
        computed: {
            getCharactersResults () {
                return this.$store.getters.getChatactersResults
            },
            getPage () {
                return this.$store.getters.getPage
            }
        },
        components: {
            CharactersItem: CharactersItem
        }
    }
</script>

<style scoped>
    .title{
        text-align: center;
        margin: 30px 0;
    }
</style>
