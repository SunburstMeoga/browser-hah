<template>
    <div class="w-full text-white300 text-base font-bold">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style></style>