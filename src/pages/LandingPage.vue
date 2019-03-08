<template>
    <div>
        <Hero />
        <Content />
        <Team />
    </div>
</template>

<script>
    import Hero from '../components/Hero'
    import Content from '../components/Content'
    import Team from '../components/Team'

    export default {
        name: "LandingPage",
        components: {
            Hero,
            Content,
            Team
        }
    }
</script>

<style scoped>

</style>