<template>
    <div>
        <transition name="fade" appear mode="out-in">
            <div>
                <h3>Users</h3>
                <router-link to="/users/1" tag="button">user1</router-link>
                <router-link to="/users/2" tag="button">user2</router-link>
                <router-link to="/users/3" tag="button">user3</router-link>
                <hr>
                <h3>User No.{{ id }}</h3>
                <!-- <router-link :to="'/users/'+(Number(id) + 1)+'/profile'">Next User's Profile</router-link> -->
                <router-link :to="{name:'users-id-profile', params: {id: (Number(id)+1)}}">Next User's Profile</router-link>
                <router-view></router-view>
            </div>
        </transition>
    </div>
</template>
<script>

export default {
    props:["id"],
}
</script>
<style scoped>
.fade-enter{
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s;
}
.fade-leave-to{
    opacity: 0;
}
</style>
