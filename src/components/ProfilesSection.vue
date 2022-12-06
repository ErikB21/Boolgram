<template>
    <section class="eb_profiles d-flex flex-column justify-content-start">
        <div class="eb_admin border">
            <ul class="me-auto mb-lg-0 d-flex align-items-center justify-content-between list-unstyled">
                <li class="nav-item px-2">
                    <a class="navbar-brand eb_rounded" href="#">
                        <img src="../assets/profile.jpg" alt="Profile">
                    </a>
                </li>
                <li class="nav-item px-2 d-flex flex-column">
                    <span>ErikB21</span>
                    <span>Erik Borgogno</span>
                </li>
                <li class="nav-item px-2">
                    <a class="navbar-brand" href="#">
                        Passa a
                    </a>
                </li>
            </ul>
        </div>

        <div class="eb_profile border">
            <div class="d-flex pb-3 justify-content-around">
                <span>Suggerimenti per te</span>
                <span>Mostra tutti</span>
            </div>
            <div class="d-flex flex-column ps-2">
                <ul v-for="(n, index) in 7" :key="index" class="me-auto py-2 mb-lg-0 d-flex align-items-center justify-content-start list-unstyled">
                    <li class="nav-item px-2">
                        <a class="navbar-brand eb_rounded" href="#">
                            <img :src="`https://bootdey.com/img/Content/avatar/avatar${index + 1}.png`" alt="Profile">
                        </a>
                    </li>
                    <li class="nav-item px-2 d-flex flex-column">
                        <span>ErikB21</span>
                        <span>Erik Borgogno</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProfilesSection'
}
</script>

<style scoped lang="scss">
    .eb_profiles{
        width: 40%;
        margin: 0 50px;
        .eb_admin{
            width: 100%;
            padding: 25px 0;
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

        .eb_profile{
            width: 100%;
            margin-top: 50px;
            padding: 30px 0;
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
    }
</style>