<template>
    <nav class="navbar navbar-expand-lg border-bottom py-3">
        <div class="container-fluid d-flex justify-content-between justify-content-md-evenly aling-items-center">
            <div class="d-flex align-items-center">
                <router-link :to="{name: 'home'}"  class="d-none d-md-flex navbar-brand border-4 border-end pe-3" href="#">
                    <img src="logo.svg" alt="Boolgram" width="40">
                </router-link>
                <router-link :to="{name: 'home'}"  class="navbar-brand" href="#">
                    <img src="../assets/logo.png" alt="Boolgram" width="120">
                </router-link>
            </div>


            <div class="d-none d-md-flex">
                <form class="d-flex" role="search" style="width:400px;">
                    <input class="form-control rounded text-center me-2 p-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>


            <div class="d-none d-lg-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly align-items-center">
                    <li class="nav-item pe-2">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fa-regular fa-heart fa-2x"></i></a>
                    </li>
                    <li class="nav-item pe-2">
                        <router-link class="nav-link text-dark" :to="{name: 'home'}"><i class="fa-solid fa-house fa-2x"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand eb_rounded" href="#">
                            <img src="../assets/profile.jpg" alt="Profile">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="d-flex d-lg-none">
                <MyOffCanvas/>
            </div>
        </div>
    </nav>
</template>

<script>
import MyOffCanvas from './MyOffCanvas.vue'
export default {
  components: { MyOffCanvas },
    name: 'MyHeader',
}
</script>

<style scoped lang="scss">
    nav{
        width: 100%;
        .eb_rounded{
            width: 65px;
            height: 65px;
            border-radius: 50%;
            img{
                width: 65px;
                height: 65px;
                border-radius: 50%;
                object-fit: contain;
            }
        }
    }
</style>