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
                    <button @click="addLike()" class="like-button border-0 eb_bg js-like-button d-flex" data-postid="1">
                        <i class="like-button__icon fa-solid fa-thumbs-up pe-2 fa-2x" aria-hidden="true"></i>
                        <span class="like-button__label fs-5">Like</span>
                    </button>
                </div>
                <div class="likes__counter fs-5">
                    <b id="like-counter-1" class="js-likes-counter">{{lengthObject(profile.likes)}}</b> Like
                </div>
                <div class="fs-5">
                    <b class="fw-bold">{{lengthObject(profile.comments)}}</b> Comments
                </div>
            </div>
        </div>
        <div v-if="lengthObject(profile.comments)" class="bg-light post__comment px-3 pt-5 border mt-3">
            <div v-for="(n, index) in profile.comments.slice(0,3)" :key="index" class="d-flex mb-2 py-2 rounded-5 eb_bg ps-3">
                <a class="post-meta__icon navbar-brand me-2">
                    <img class="" :src="`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/17${index + 1}.jpg`" alt="Profile">                    
                </a>
                <div class="ms-3">
                    <h5>{{n.username}}</h5>
                    <span class="text-secondary">{{n.text}}</span>
                </div>
            </div>
            <div class="mb-2 py-3 ps-3 d-flex align-items-center justify-content-between">
                <input type="text" @keyup.enter="addComment()" v-model="newComment" id="list1" style="width:450px" class="border-0 py-3 rounded-5 px-2" placeholder="New Comment">
                <button @click.prevent="addComment()" class="btn eb_bg py-2 rounded-3 px-3">
                    <i class="fa-solid fa-comment fa-2x"></i>
                </button>
            </div>
        </div> 
        <div v-else class="bg-light post__comment px-3 pt-5 border mt-3">
            <div class="mb-2 py-3 ps-3">
                <label class="pb-2 text-secondary fs-5" for="list1">Puoi essere il primo a commentare</label>
                <div class="d-flex align-items-center justify-content-between">
                    <input type="text" @keyup.enter="addComment()" v-model="newComment" id="list1" style="width:450px" class="border-0 py-3 rounded-5 px-2" placeholder="New Comment">
                    <button @click.prevent="addComment()" class="btn btn-primary py-2 rounded-3 px-3">
                        <i class="fa-solid fa-comment-dots fa-2x"></i>
                    </button>
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
    data(){
        return{
            newComment: '',
            profiles: this.profile.comments,
            profilesLike: this.profile.likes,
            sending: false,
        }
    },
    methods:{
        
        formatDate(date){
            let posts = date.substr(0,10);
            return posts.split('-').reverse().join('/');
        },

        lengthObject(n){
            let leOb = n.length;
            return leOb;
        },

        addComment() {
            const chatComment = this.newComment.trim();
                if(chatComment.length > 0){
                    this.profiles.push(
                    {
                        username: 'ErikB21',
                        text: this.newComment,
                    }
                )
                this.newComment = '';
            }
        },

        addLike() {
            this.sending = true;
            this.profilesLike.push(
                {
                    username: 'ErikB21',
                    profile_picture: require('@/assets/profile.jpg'),
                }
            )
            
            this.sending = false;
        },
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
        }
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

        .eb_bg{
            background-color: white;
            border: 1px solid lightgray;
        }
    }

</style>