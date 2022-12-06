<template>
    <nav class="navbar navbar-expand-lg bg-light py-3">
        <div class="container-fluid d-flex justify-content-evenly aling-items-center">
            <div class="pe-2">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" alt="Boolgram" width="120">
                </a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div>
                <form class="d-flex" role="search" style="width:400px;">
                    <input class="form-control rounded text-center me-2 p-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>

            <div>
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
    name: 'MyHeader'
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