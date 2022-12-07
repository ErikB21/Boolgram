<template>
    <div class="d-flex align-items-start">
        <div class="spinner-border" role="status">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadProgress',
    data(){
        return{
            timer: 0
        }
    },
    mounted(){
        this.starLoadProgress()
    },
    methods:{
        starLoadProgress: function() {
            this.timer = setInterval(this.next, 4000);
        },
    }
}
</script>

<style scoped lang="scss">

</style>