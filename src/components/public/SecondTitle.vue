<template>
    <div>
        <div class="flex justify-start items-center">
            <div class="font-bold text-lighttable">{{ title }}</div>
            <div class="pl-2 text-lightword truncate"> {{ details }}</div>
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