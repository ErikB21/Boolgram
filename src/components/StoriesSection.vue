<template>
    <section class="mx-2 eb_stories d-flex flex-column justify-content-start">
        <div class="eb_story border d-flex align-items-center">
            <ul class="me-auto mb-lg-0 d-flex align-items-center">
                <li v-for="(n, index) in 8" :key="index" class="nav-item pe-2 list-unstyled">
                    <a class="navbar-brand eb_rounded" href="#">
                        <img :src="`https://bootdey.com/img/Content/avatar/avatar${index + 1}.png`" alt="Profile">
                    </a>
                </li>
            </ul>
        </div>

        <div v-for="(n, index) in 3" :key="index" class="post border">
            <div class="post__header">
                <div class="d-flex">                    
                    <a class="post-meta__icon navbar-brand me-2">
                        <img class="" src="../assets/profile.jpg" alt="Profile">                    
                    </a>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Erik Borgogno</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__image">
                <img src="../assets/landscape.png" alt="">
            </div>

            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    </section>
</template>

<script>
export default {
    name: 'StoriesSection'
}
</script>

<style scoped lang="scss">
    .eb_stories{
        width: 60%;
        .eb_story{
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
        .post { 
            padding: 16px;
            margin-top: 50px;
            background-color: white;
            &__header {
                margin-bottom: 16px;
            }
            .post-meta {
                display: flex;
                &__icon {
                    border-radius: 50%;
                    width: 65px;
                    height: 65px;
                    img{
                        border-radius: 50%;
                        width: 65px;
                        height: 65px;
                        object-fit: contain;
                    }
                }

                &__data {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &__author {
                        font-weight: bold;
                    }

                    &__time {
                        font-size: 0.8rem;
                    }
                }
            }

            .post__image {
                margin-bottom: 16px;
                height: 400px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .likes {
                display: flex;
                justify-content: space-around;
                align-items: center;
                .like-button {
                    display: inline-block;
                    padding: 16px;
                    border-radius: 8px;    
                    text-decoration: none;
                    color: #404040;
                }
                .like-button:not(.like-button--liked):hover {
                    background-color: #e3e3e3
                }

                .like-button__label {
                    font-weight: bold;
                }

                .like-button--liked {
                    color: #0CD977;
                    cursor: default;
                }
            }
        }  
    }
</style>