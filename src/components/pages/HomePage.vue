<template>
    <div class="container m-auto pt-5 mt-3 eb_stories d-flex justify-content-center">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="eb_story border d-flex flex-column align-items-center">
                <LoadProgress v-if="loadProgress"/>
                <ul class="mb-lg-0 d-flex align-items-center justify-content-center p-0">
                    <StoriesSection v-for="story in storyList" :key="story.id" :story="story"/> 
                </ul>
            </div>
            <div class="eb_posts d-flex flex-column justify-content-center">
                <PostsSection v-for="profile in profileList" :key="profile.id" :profile="profile" />
            </div>
        </div>

        <section class="eb_profiles d-none d-lg-flex flex-column justify-content-start">
            <div class="eb_admin border">
                <ul class="me-auto mb-lg-0 d-flex align-items-center justify-content-center justify-content-xl-between list-unstyled">
                    <li class="nav-item px-2">
                        <router-link class="navbar-brand eb_rounded" :to="{name: 'profile'}">
                            <img src="@/assets/profile.jpg" alt="Profile">
                        </router-link>
                    </li>
                    <li class="nav-item px-2 d-none d-lg-flex flex-column">
                        <span class="fw-bold">ErikB21</span>
                        <span class="text-secondary">Erik Borgogno</span>
                    </li>
                    <li class="nav-item px-2 d-none d-xl-flex">
                        <a class="navbar-brand" href="#">
                            Passa a
                        </a>
                    </li>
                </ul>
            </div>

            <div class="eb_profile border">
                <div class="d-flex pb-3 justify-content-around align-items-center">
                    <span class="fs-5 fw-bold text-secondary">Suggerimenti per te</span>
                    <span class="fw-bold d-none d-xl-flex">Mostra tutti</span>
                </div>
                <ProfilesSection v-for="profile in profileList" :key="profile.id" :profile="profile"/>
            </div>
        </section>
    </div>
</template>


<script>
import ProfilesSection from '../ProfilesSection.vue'
import StoriesSection from '../StoriesSection.vue';
import axios from 'axios';
import PostsSection from '../PostsSection.vue';
import LoadProgress from '../LoadProgress.vue';
export default {
  components: { StoriesSection, ProfilesSection, PostsSection, LoadProgress },
    name: 'HomePage',
    data(){
        return{
            profileList: [],
            storyList:[],
            commentList: [],
            loadProgress: true,
            apiPost: 'https://flynn.boolean.careers/exercises/api/boolgram/posts',
            apiStory: 'https://flynn.boolean.careers/exercises/api/boolgram/profiles'
        }
    },
    mounted(){
        this.getProfile();
        this.getStory();
    },
    methods:{
        getProfile(){
            axios.get(this.apiPost)
            .then((response) =>{
                console.log(response);
                this.profileList = response.data;
                this.commentList = this.profileList;
                console.log(this.profileList);
                this.loadProgress = false;
            })
            .catch((err) =>{
                console.log(err);
                this.loadProgress = false;
            })
        },
        getStory(){
            axios.get(this.apiStory)
            .then((response) =>{
                console.log(response);
                this.storyList = response.data;
                console.log(this.storyList);
                this.loadProgress = false;
            })
            .catch((err) =>{
                console.log(err);
                this.loadProgress = false;
            })
        },
        
    }
}
</script>

<style lang="scss" scoped>
    .eb_stories{
        width: 100%;
        .eb_story{
            width: 100%;
            padding: 25px 0;
            ul{
                overflow-x: auto;
            }
        }
        .eb_posts{
            width: 100%;
        }
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
                
            }
        }
    }

    @media screen and (max-width:575.98px) {

    }
</style>