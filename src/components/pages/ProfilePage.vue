<template>
    <div class="container">
        <section class="row details mt-5 justify-content-center">
            <div class="col-12 col-md-4">
                <div class="eb_rounded d-flex justify-content-center align-items-center">
                    <img src="@/assets/profile.jpg" alt="Profile">
                </div>   
            </div>
            <div class="col-12 col-md-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 flex-row d-flex align-items-center">
                           <h1 class="me-3">ErikB21</h1>
                           <span class="btn btn-primary">Follow</span>
                           <span class="btn btn-primary ms-2"><i class="fa-solid fa-chevron-down"></i></span> 
                        </div>

                        <div class="col-12 mt-3">
                            <ul class="d-flex list-unstyled justify-content-between align-items-center">
                                <li><strong>6</strong> posts</li>
                                <li><strong>13.5k</strong> followers</li>
                                <li><strong>21</strong> following</li>
                            </ul>
                        </div>
                        <div class="col-12 d-flex mt-3 align-items-center">
                            <span><h4>Erik Borgogno</h4></span>
                            <span class="ms-3">Full Stack Web Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="row stories mt-5 pt-5 mb-5 pb-5 justify-content-center">
            <div v-for="(album ,index) in albums" :key="index" class="col-1 d-flex flex-column align-items-center">
                <a href="" class="eb_round">
                    <img :src="`https://source.unsplash.com/random/300x300?sig=${index + 1}`" alt="">
                </a>
                <span>{{album}}</span>
            </div>
        </section>



        <section class="row photo mt-5 pt-5 justify-content-center">
            <div v-for="(n,index) in 6" :key="index" class="col-4 d-flex justify-content-center mb-5">
                <img :src="`https://source.unsplash.com/random/300x400?sig=${index + 1}`" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'ProfilePage',
    data(){
        return{
            albums:['Casa', 'Lavoro', 'Amici', 'Animali', 'Viaggi', 'Natura', 'Auto', 'Sport']
        }
    }
}
</script>

<style scoped lang="scss">
    .eb_rounded{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid violet;
        img{
            width: 185px;
            height: 185px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid white;
        }
    }
    .eb_round{
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