<template>  
    <div class="d-flex flex-column">
        <ul class="me-auto py-2 px-2 mb-lg-0 d-flex align-items-center justify-content-start list-unstyled">
            <li class="nav-item px-2">
                <a class="navbar-brand eb_rounded" href="#">
                    <img :src="profile.profile_picture" :alt="profile.profile_name">
                </a>
            </li>
            <li class="nav-item px-2 d-flex flex-column">
                <span class="fw-bold">{{profile.profile_name}}</span>
                <span class="text-secondary">{{profile.profile_fullname}}</span>
            </li>
        </ul>        
    </div>          
</template>

<script>
export default {
    name: 'ProfilesSection',
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