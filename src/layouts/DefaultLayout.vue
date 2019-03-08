<template>
    <div>
        <Navbar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import Navbar from '../components/common/Navbar'
    import Footer from '../components/common/Footer'

    export default {
        name: "DefaultLayout",
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>

</style>