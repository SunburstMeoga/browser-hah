<template>
    <div>
        <div class="py-2 px-4 text-gray100 text-sm">
            <div class="flex justify-start mb-2 items-center">
                <div class="pr-2">Show:</div>
                <div class="mr-2 w-16">
                    <!-- <input type="text"
                        class="search bg-gray100 w-full h-full rounded-sm"> -->
                    <select v-model="selectedPageSize" class="bg-gray100 text-gray-300 w-full h-6 rounded-sm"
                        @change="getValue">
                        <option v-for="(item, index) in pageSizeList" :value="item.pageSize" v-text="item.pageSize"
                            :key="index" />
                    </select>
                </div>
                <div>Records</div>
            </div>

            <div>
                <div class="flex justify-start">
                    <div class="pr-2">First:</div>
                    <div class="mr-2"> pre </div>

                    <div class="mr-2" :class="isFocus ? 'focused' : 'not-focused'">
                        <input @focus="focusSearch" @blur="blurSearch" type="text"
                            class="search bg-gray100 w-full h-full rounded-sm">
                    </div>
                    <div class="mr-2"> next </div>
                    <div class="pr-2">Last:</div>
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
    border: 1px solid #f1b434;
}

.not-focused {
    border: 1px solid #2a3037;
}

.search {
    caret-color: #f1b434;
    text-align: center;
}

.search::placeholder {
    color: #202a2b;
}
</style>