Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                        <a href="#" @click="ocultarWidget">Cerrar</a>
                        <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dui justo, at molestie orci dapibus
                            vitae.
                        </slot>
                </div>
                <footer class="alerta__footer">
                        <slot name="footer">Este es el texto del footer</slot>
                </footer>
            </section>`,
    methods: {
        ocultarWidget() {
            //must emit en event to pass the info to the instance (parent)
            this.$emit('ocultar'); //this is your custom event
        }
    }
});

new Vue({
    el: 'main',
    data: {
        mostrarError: false,
        mostrarExito: false,
        mostrarAdvertencia: false,
    }
});