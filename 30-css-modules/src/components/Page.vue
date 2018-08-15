<template>
    <div>
        <h1 :class="[$style.title]">Title</h1>
        <p :class="[$style.red]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>    

        <p :class="{ [$style.underlined] :underlined }">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            //underlined: false, //not underlined
            underlined: true, //underlined text
        }
    }
}
</script>

<style module>;
    .red {
        color:darkred;
    }
    .title {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 30;
        color: indianred;
    }
    .underlined {
        text-decoration: underline;
    }
</style>

