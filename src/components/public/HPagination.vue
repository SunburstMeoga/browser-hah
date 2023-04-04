<template>
    <div>
        <div class="pt-2 pb-3 px-4 text-sm text-ligthword sm:flex sm:justify-between sm:items-center dark:text-black100">
            <div class="flex justify-start mb-2 items-center">
                <div class="pr-2">{{ $t('pagination.show') }}</div>
                <div class="mr-2 w-16 border border-ligthborder dark:border-border100">
                    <select v-model="selectedPageSize"
                        class="w-full h-6 rounded-lg bg-white border-ligthborder dark:text-white200 dark:bg-black200 dark:border-border100"
                        @change="changePageSize">
                        <option v-for="(item, index) in pageSizeList" :value="item.pageSize" v-text="item.pageSize"
                            :key="index" />
                    </select>
                </div>
                <div>{{ $t('pagination.records') }}</div>
            </div>
            <div>
                <div class="flex justify-start items-center">
                    <div class="mr-1 h-6 border px-2 flex justify-center items-center rounded-sm border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable"
                        @click="toFirstPage">
                        {{ $t('pagination.first') }}
                    </div>
                    <div class="mr-1 h-6 rounded-sm w-6 icon iconfont icon-arrow-right flex justify-center items-center border border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable"
                        style="transform: rotate(180deg);" @click="toPrePage" />
                    <div
                        class="mr-1 w-12 h-6 text-center rounded-sm border border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable">
                        {{ pageSize }}
                    </div>
                    <div class="mr-1 h-6 w-6 rounded-sm icon iconfont flex justify-center items-center icon-arrow-right border border-ligthborder dark:border-border100 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110"
                        @click="toNextPage" />
                    <div class="h-6 border px-2 flex justify-center items-center rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 border-ligthborder dark:border-border100"
                        @click="toLastPage">
                        {{ $t('pagination.last') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFocus: false,
            pageSizeList: [
                { pageSize: 10 },
                { pageSize: 25 },
                { pageSize: 50 },
                { pageSize: 100 }
            ],
            selectedPageSize: 10
        }
    },
    props: {
        pageSize: {
            type: Number,
            default: 1
        }
    },
    methods: {
        changePageSize() {
            this.$emit('changePageSize', this.selectedPageSize)
            console.log('pageSize', this.selectedPageSize)
        },
        toFirstPage() {
            this.$emit('toFirstPage', this.selectedPageSize)
        },
        toPrePage() {
            this.$emit('toPrePage', this.selectedPageSize)

        },
        toNextPage() {
            this.$emit('toNextPage', this.selectedPageSize)
        },
        toLastPage() {
            this.$emit('toLastPage', this.selectedPageSize)
        },

    }
}
</script>

<style scoped>
input[type=text]:focus {
    outline: none;
}

.focused {
    border: 2px;
}

.not-focused {
    border: 1px solid #222;
}

.search {
    caret-color: #f1b434;
    text-align: center;
}

.search::placeholder {
    color: #202a2b;
}
</style>