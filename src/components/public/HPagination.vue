<template>
    <div>
        <div class="pt-2 pb-3 px-4 text-black100 text-sm">
            <div class="flex justify-start mb-2 items-center">
                <div class="pr-2">Show:</div>
                <div class="mr-2 w-16 border border-border100">
                    <select v-model="selectedPageSize"
                        class="bg-black200 border-border100 text-white200 w-full h-6 rounded-lg" @change="getValue">
                        <option v-for="(item, index) in pageSizeList" :value="item.pageSize" v-text="item.pageSize"
                            :key="index" />
                    </select>
                </div>
                <div>Records</div>
            </div>
            <div>
                <div class="flex justify-start items-center">
                    <div
                        class="mr-1 h-6 border border-border100 px-2 flex justify-center items-center rounded-sm text-btndisable">
                        First
                    </div>
                    <div class="mr-1 h-6 rounded-sm w-6 icon iconfont icon-arrow-right flex justify-center items-center border border-border100 text-btndisable"
                        style="transform: rotate(180deg);" />
                    <div class="mr-1 h-6 rounded-sm" :class="isFocus ? 'focused' : 'not-focused'">
                        <input @focus="focusSearch" @blur="blurSearch" type="text"
                            class="search bg-black200 w-full h-full rounded-sm">
                    </div>
                    <div
                        class="mr-1 h-6 w-6 rounded-sm icon iconfont flex justify-center items-center icon-arrow-right border border-border100 text-clickable" />
                    <div
                        class="h-6 border border-border100 px-2 flex justify-center items-center rounded-sm text-clickable">
                        Last
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
                { pageSize: "10" },
                { pageSize: "25" },
                { pageSize: "50" },
                { pageSize: "100" }
            ],
            selectedPageSize: '10'
        }
    },
    methods: {
        getValue() {
            console.log('pageSize', this.selectedPageSize)
        },
        focusSearch() {
            this.isFocus = true
        },
        blurSearch() {
            this.isFocus = false
        },
    }
}
</script>

<style scoped>
input[type=text]:focus {
    outline: none;
}

.focused {
    border: 2px solid #222;
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