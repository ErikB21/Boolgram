<template>
    <nav class="navbar navbar-expand-lg border-bottom py-3">
        <div class="container-fluid d-flex justify-content-between justify-content-md-evenly aling-items-center">
            <div class="pe-2">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" alt="Boolgram" width="120">
                </a>
            </div>

            

            <div class="d-none d-md-flex">
                <form class="d-flex" role="search" style="width:400px;">
                    <input class="form-control rounded text-center me-2 p-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>

            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasNavbar" aria-controls="offCanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->

            <button class="btn btn-primary" @click.prevent="showOffcanvasMenu()" type="button" data-bs-toggle="offcanvas" data-bs-target="#rightOffcanvas" aria-controls="rightOffcanvas">
                Right Offcanvas
            </button>

            <div class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" :style="{ visibility: showMenu ? 'visible' : 'hidden' }" tabindex="-1" id="rightOffcanvas" aria-labelledby="rightOffcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="rightOffcanvasLabel">Right Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Posts</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                    </ul>
                </div>
            </div>

            <div class="d-none d-lg-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly align-items-center">
                    <li class="nav-item pe-2">
                        <a class="nav-link active" aria-current="page" href="#"><i class="fa-regular fa-heart fa-2x"></i></a>
                    </li>
                    <li class="nav-item pe-2">
                        <a class="nav-link text-dark" href="#"><i class="fa-solid fa-house fa-2x"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand eb_rounded" href="#">
                            <img src="../assets/profile.jpg" alt="Profile">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MyHeader',
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