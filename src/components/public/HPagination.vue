<template>
    <div>
        <div class="py-3 px-4 text-sm text-ligthword sm:flex sm:justify-between sm:items-center dark:text-black100">
            <div class="flex justify-between items-center">
                <div class="flex justify-center items-center">
                    共有 <span class="text-clickable px-1"> {{ totalPage }} </span> 页
                </div>
                <div class="flex justify-start items-center sm:ml-4">
                    <div>
                        前往
                    </div>
                    <div
                        class="w-8 rounded-sm h-6 overflow-hidden mx-1 border border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable">
                        <input type="text" class="w-full border-none h-full bg-transparent text-center"
                            v-model="currentPage">
                    </div>
                    <div class="mr-2">
                        页
                    </div>
                    <div class="icon iconfont icon-qianwang cursor-pointer text-clickable" @click="toTargetPage"></div>
                </div>
            </div>
            <div class="flex flex-wrap justify-between items-center sm:flex-nowrap">
                <div class="flex justify-start items-center mb-2 sm:mb-0 sm:ml-6">
                    <div class="pr-2">{{ $t('pagination.show') }}</div>
                    <div class="mr-2 w-16 border rounded-sm border-ligthborder dark:border-border100">
                        <select v-model="selectedPageSize"
                            class="w-full h-6 bg-white dark:text-white200 dark:bg-black200 dark:border-border100"
                            @change="changePageSize">
                            <option v-for="(item, index) in pageSizeList" :value="item.pageSize" v-text="item.pageSize"
                                :key="index" />
                        </select>
                    </div>
                    <div>{{ $t('pagination.records') }}</div>
                </div>
                <div class="sm:ml-6">
                    <div class="flex justify-start items-center">
                        <div class="cursor-pointer text-clickable mr-1 h-6 border px-2 flex justify-center items-center rounded-sm border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable"
                            @click="toFirstPage">
                            {{ $t('pagination.first') }}
                        </div>
                        <div class="cursor-pointer text-clickable mr-1 h-6 rounded-sm w-6 icon iconfont icon-arrow-right flex justify-center items-center border border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable"
                            style="transform: rotate(180deg);" @click="toPrePage" />
                        <div
                            class="mr-1 w-12 flex items-center justify-center h-6 rounded-sm border border-ligthborder text-ligthword dark:border-border100 dark:text-btndisable">
                            {{ currentPage }}
                        </div>
                        <div class="cursor-pointer text-clickable mr-1 h-6 w-6 rounded-sm icon iconfont flex justify-center items-center icon-arrow-right border border-ligthborder dark:border-border100"
                            @click="toNextPage" />
                        <div class="cursor-pointer text-clickable h-6 border px-2 flex justify-center items-center rounded-sm  border-ligthborder dark:border-border100"
                            @click="toLastPage">
                            {{ $t('pagination.last') }}
                        </div>
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
        currentPage: {
            type: Number,
            default: 1
        },
        totalPage: {
            type: Number,
            default: 0
        }
    },
    methods: {
        changePageSize() {
            this.$emit('changePageSize', this.selectedPageSize)
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
        toTargetPage() {
            this.$emit('toTargetPage', this.selectedPageSize, this.currentPage)
        }
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