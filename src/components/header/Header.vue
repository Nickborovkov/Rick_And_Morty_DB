<template>
    <div>
        <p>header</p>
        <div class="routes">
            <router-link
                    active-class="activeRoute"
                    class="route"
                    to="/"
            >
                Home
            </router-link>
            <router-link
                    active-class="activeRoute"
                    class="route"
                    to="/characters"
            >
                Characters
            </router-link>
            <router-link
                    active-class="activeRoute"
                    class="route"
                    to="/locations"
            >
                Locations
            </router-link>
            <router-link
                    active-class="activeRoute"
                    class="route"
                    to="/episodes"
            >
                Episodes
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .routes{
        display: flex;
        justify-content: center;
    }
    .route{
        font-size: 20px;
        display: block;
        width: 200px;
        text-align: center;
        text-decoration: none;
        color: cornflowerblue;
    }
    .activeRoute{
        color: tomato;
    }
</style>
