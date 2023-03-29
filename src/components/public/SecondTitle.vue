<template>
    <div>
        <div class="flex justify-start items-center">
            <div class="font-bold text-lighttable">{{ title }}</div>
            <div class="pl-2 text-lightword"> {{ details }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Block'
        },
        details: {
            type: String,
            default: '#34334'
        }
    }
}
</script>

<style></style>