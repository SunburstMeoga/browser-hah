<template>
    <div>
        <div class="flex justify-start items-center">
            <div class="font-bold text-lighttable  dark:text-white300">{{ title }}</div>
            <div class="pl-2 truncate text-lightword dark:text-black100"> {{ details }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        details: {
            type: String,
            default: ''
        }
    }
}
</script>

<style></style>