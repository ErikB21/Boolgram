<template>
    <div class="post border d-flex flex-column">
        <div class="post__header">
            <div class="d-flex">                    
                <a class="post-meta__icon navbar-brand me-2">
                    <img class="" :src="profile.profile_picture" alt="Profile">                    
                </a>
                <div class="post-meta__data">
                    <div class="post-meta__author">
                        <h5>{{profile.profile_name}}</h5>
                    </div>
                    <div class="post-meta__time text-secondary">{{formatDate(profile.date.date)}}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">{{profile.post_text}}</div>
        <div class="post__image">
            <img :src="profile.post_image" :alt="profile.profile_name">
        </div>

        <div class="post__footer">
            <div class="likes js-likes d-flex align-items-center">
                <div class="likes__cta">
                    <a class="like-button  js-like-button d-flex" href="#" data-postid="1">
                        <i class="like-button__icon fa-solid fa-thumbs-up pe-2 fa-2x" aria-hidden="true"></i>
                        <span class="like-button__label fs-5">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter fs-5">
                    Piace a <b id="like-counter-1" class="js-likes-counter">{{lengthObject(profile.likes)}}</b> persone
                </div>
                <div class="fs-5">
                    <b class="fw-bold">{{lengthObject(profile.comments)}}</b> Commenti
                </div>
            </div> 
        </div>            
    </div>
</template>

<script>
export default {
    name:'PostsSection',
    props:{
        profile: Object
    },
    methods:{
        
        formatDate(date){
            let posts = date.substr(0,10);
            return posts.split('-').reverse().join('/');
        },

        lengthObject(n){
            let leOb = n.length;
            return leOb;
        }
    }
}
</script>

<style scoped lang="scss">
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
                    object-fit: cover;
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

        .post__text {
            margin-bottom: 16px;
        }

        .post__image {
            margin-bottom: 16px;
            height: 300px;
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

</style>