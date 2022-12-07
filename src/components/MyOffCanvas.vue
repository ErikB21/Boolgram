<template>
    <div>
        <button @click.prevent="showOffcanvasMenu()" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#rightOffcanvas" aria-expanded="false" aria-controls="rightOffcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div v-if="showMenu" class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" :style="{ visibility: showMenu ? 'visible' : 'hidden' }" style="height:500px;width: 50%;" tabindex="-1" id="rightOffcanvas" aria-labelledby="rightOffcanvasLabel">
            <div class="offcanvas-header">
                <button class="btn btn-close text-reset" @click.prevent="showOffcanvasMenu()" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between">
                <ul class="d-flex list-unstyled flex-column justify-content-center align-items-center">
                    <li class="nav-item">
                        <a class="navbar-brand p-0 m-0 eb_rounded" href="#">
                            <img src="../assets/profile.jpg" alt="Profile">
                        </a>
                    </li>
                    <li class="nav-item d-flex flex-column pt-3 justify-content-between align-items-center">
                        <span class="fw-bold fs-5">ErikB21</span>
                        <span class="text-secondary fs-5">Erik Borgogno</span>
                    </li>
                </ul>
                <ul class="d-flex list-unstyled flex-column">
                    <li class="py-3">
                        <router-link :to="{name: 'profile'}" class="d-flex align-items-center text-decoration-none"><i class="fa-solid fa-user fa-2x pe-2"></i> Profilo</router-link>
                    </li>
                    <li class="py-3">
                        <a class="d-flex align-items-center text-decoration-none" href=""><i class="fa-solid fa-users fa-2x pe-2"></i> Amici</a>
                    </li>
                    <li class="py-3">
                        <a class="d-flex align-items-center text-decoration-none" href=""><i class="fa-solid fa-gear fa-2x pe-2"></i>Impostazioni</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MyOffCanvas',
    data(){
        return {
            showMenu: false
        }
    },
    methods: {
        showOffcanvasMenu(){
            this.showMenu ? this.showMenu = false : this.showMenu = true;
        }
    }
}
</script>

<style scoped lang="scss">
    .eb_rounded{
        width: 85px;
        height: 85px;
        border-radius: 50%;
        img{
            width: 85px;
            height: 85px;
            border-radius: 50%;
            object-fit: contain;
        }
    }
</style>