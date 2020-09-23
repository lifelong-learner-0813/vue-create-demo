<template>
    <div>
        <h1>User component page</h1>
        <h1>user is {{$route.params}}</h1>
        <h1>-------------</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    import UserProfile from "./UserProfile"
    import UserPosts from "./UserPosts"

    export default {
        name: "User",
        components: {
            UserPosts,
            UserProfile,
        }
    }
</script>

<style scoped>

</style>
