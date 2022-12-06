<template>
    <main class="container-fluid px-0">
        <div class="container d-flex pt-5">
            <StoriesSection/>
            <ProfilesSection/>
        </div>
    </main>
</template>

<script>
import ProfilesSection from './ProfilesSection.vue'
import StoriesSection from './StoriesSection.vue'
export default {
  components: { StoriesSection, ProfilesSection },
    name: 'MyMain'
}
</script>

<style lang="scss" scoped>
</style>