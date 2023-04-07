<template>
    <div class="flex justify-start items-end">
        <div class="text-black  dark:text-white300 text-base font-bold sm:text-xl">
            {{ title }}
        </div>
        <div class="pl-2 text-sm text-lightmoreword dark:text-black100">
            Total of 16,995,221 blocks
        </div>
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