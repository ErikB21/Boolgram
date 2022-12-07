<template>
    <li class="nav-item px-2 list-unstyled">
        <a class="navbar-brand eb_rounded" href="#">
            <img :src="profile.profile_picture" alt="Profile">
        </a>
    </li>
</template>

<script>
export default {
    name: 'StoriesSection',
    props:{
        profile: Object
    }
}
</script>

<style scoped lang="scss">
    .eb_rounded{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        img{
            width: 65px;
            height: 65px;
            border-radius: 50%;
            object-fit: cover;
        }
    }  
</style>