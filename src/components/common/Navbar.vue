<template>
    <header id="header">
        <h1 id="logo"><router-link to="/"><img src="../../assets/images/logo/logo.png" alt="logo" width="100px" class="logo"></router-link></h1>
        <nav id="nav">
            <ul>
                <li><router-link to="/mission">Misiune</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><a href="http://registruutilaje.rerise.org" target="_blank">Registrul utilajelor</a></li>
                <li><router-link to="/donate" class="button primary">Donează</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    li {
        color: white;
    }
    .logo {
        outline: none;
    }
</style>