<!--
<template>
    <div>
        <header v-if="type == 'header'">
            <slot></slot>
        </header>
        <section v-if="type == 'section'"> only visible if type = section
            <slot></slot>
        </section>
        <aside v-if="type == 'aside'"> only visible if type = section
            <slot></slot>
        </aside>
        <article v-if="type == 'article'"> only visible if type = section
            <slot></slot>
        </article>
        <footer v-if="type == 'footer'">
            <slot></slot>
        </footer>
    </div>
</template>
-->

<script>
export default {
    props: ['type'],
    render (createElement) {
        return createElement (
            this.type, //this.type defines what type of tag we're gonna use
            this.$slots.default //array of children
            //creates the element depending on the type prop
        )
    }
}
</script>
<style>

</style>
