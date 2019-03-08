<template>
    <div class="container">
        <header class="major">
            <h2>Donează</h2>
            <p>Dacă vrei să susţii cauza noastră, foloseste PayPal mai jos:
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="SGZ8AHADZPL4J" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_RO/i/scr/pixel.gif" width="1" height="1" />
            </form>
            </p>

            <p>Pentru mai multe informatii va rugam sa ne scrieti la <a href="mailto:office@rerise.org"><span class="label">office@rerise.org</span></a></p>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Donate"
    }
</script>

<style scoped>
    .container {
        padding-top: 100px;
    }
</style>