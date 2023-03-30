<template>
    <div class="bg-white border-b border-lightborder dark:border-border100 dark:bg-black400">
        <!-- search -->
        <div class="py-2 border-b border-lightborder dark:border-border100">
            <div class="flex rounded-lg justify-start items-center w-11/12 mr-auto ml-auto h-9 overflow-hidden border border-b border-lightborder dark:border-border100 dark:bg-black400"
                :class="isFocus ? 'focused' : ''">
                <div class="icon iconfont icon-search pr-2 pl-3 text-lightword dark:text-black100" />
                <div class="flex-1 h-full ">
                    <input type="text" :placeholder="$t('common.placeholder')" @focus="focusSearch" @blur="blurSearch"
                        class="search w-full h-full rounded-sm dark:bg-black400" v-model="searchContent" />
                </div>
            </div>
            <div class="w-11/12 mr-auto ml-auto mt-4 flex justify-start flex-wrap show-easy" v-show="showSearchCriteria">
                <div class="flex justify-start items-center text-sm px-2 mr-6 rounded-lg mb-2 text-lighttable  dark:bg-black300 dark:text-black100"
                    v-for="(item, index) in searchCriteriaList" :key="index" @click="handleSearch(item.path)">
                    <div class="icon iconfont text-lg" :class="item.icon"></div>
                    <div class="pl-1">{{ item.title }}</div>

                </div>
            </div>
        </div>
        <!-- logo and theme language menu -->
        <div class="flex justify-between items-center w-11/12 py-3 ml-auto mr-auto">
            <div class="flex items-center">
                <div class="w-32">
                    <img class="object-contain" src="../../assets/images/custom/logo.png" alt="$t('common.browser')">
                </div>
            </div>
            <div class="flex justify-end items-center">
                <!-- theme -->
                <div
                    class="rounded-lg flex items-center justify-center w-7 h-7 border border-lightborder dark:border-border100 mr-2">
                    <div class="icon iconfont text-2xl text-lighticon dark:text-grayicon"
                        :class="$store.state.isDark ? 'icon-night-mode' : 'icon-daytime-mode'" @click="changeTheme" />
                </div>
                <!-- language -->
                <div class="rounded-lg flex items-center justify-center w-7 h-7 border border-lightborder dark:border-border100 mr-2"
                    @click="changeLanguages">
                    <div class="icon iconfont icon-language text-2xl text-lighticon dark:text-grayicon" />
                </div>
                <!-- menu -->
                <div
                    class="rounded-lg flex items-center justify-center w-7 h-7 border border-lightborder dark:border-border100">
                    <div class="icon iconfont text-lighticon text-2xl dark:text-grayicon"
                        :class="!showMenu ? 'icon-menu' : 'icon-close'" @click="clickMenu" />
                </div>
            </div>
        </div>
        <!-- menu router -->
        <div v-show="showMenu" class="menu bg-transparent w-full">
            <div class="mr-auto ml-auto bg-white dark:bg-black400">
                <div class="show-easy flex justify-between text-lighttable dark:text-grayword px-4 py-3 border-b-1 border100"
                    v-for="(item, index) in pagesList" :key="index" @click="toPage(item.path)">
                    <div class="text-sm"> {{ item.title }}</div>
                    <div class="icon iconfont icon-arrow-right text-sm"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            showSearchCriteria: false,
            isFocus: false,
            searchContent: null,
            timer: null
        }
    },
    computed: {
        pagesList() {
            return [
                { title: this.$t('eTopBar.home'), path: '/' },
                { title: this.$t('eTopBar.rich'), path: '/rank' },
                { title: 'dpos', path: '/dpos' },
                { title: 'HRC20', path: '/hrc' }
            ]
        },
        searchCriteriaList() {
            return [
                {
                    title: this.$t('common.address'),
                    icon: 'icon-shouhuodizhi',
                    path: '/address/'
                },
                {
                    title: this.$t('common.block'),
                    icon: 'icon-qukuai',
                    path: '/block/'
                },
                {
                    title: this.$t('common.tx'),
                    icon: 'icon-jiaoyiguanli',
                    path: '/tx/'
                },
            ]
        }
    },
    methods: {
        handleSearch(path) {
            if (this.searchContent) {
                this.$router.push({
                    path: path + this.searchContent
                })
            } else {
                console.log('no data')
            }
        },
        changeTheme() {
            if (!this.$store.state.isDark) {
                document.documentElement.classList.add('dark');
                this.$store.commit('changeTheme', true)
            } else {
                document.documentElement.classList.remove('dark');
                this.$store.commit('changeTheme', false)
            }
            console.log(this.$store.state.isDark)
        },
        focusSearch() {
            this.showSearchCriteria = true
            this.showMenu = false
            this.isFocus = true
        },
        blurSearch() {
            this.timer = setTimeout(() => {
                this.showSearchCriteria = false
                this.isFocus = false
            }, 300)
        },
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        clickMenu() {
            this.toggleMenu()
        },
        toPage(path) {
            this.$router.push({
                path: path
            })
            this.toggleMenu()
        },
        changeLanguages() {
            if (localStorage.getItem('language') === 'en-US') {
                localStorage.setItem('language', 'zh-CN')
            } else {
                localStorage.setItem('language', 'en-US')
            }
            this.$i18n.locale = localStorage.getItem('language')
            console.log(this.$i18n.locale)
        },
        beforeDestroy() {
            clearTimeout(this.timer);
        },
    },
}
</script>
<style>
.menu {
    height: 200px;
    animation-name: pull-down;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}

.show-easy {
    opacity: 0;
    animation-name: show-easy;
    animation-duration: 0.2s;
    animation-delay: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}

input[type=text]:focus {
    outline: none;
}

.focused {
    border-width: 2px;
}

.search {
    caret-color: #f1b434;
    text-indent: 4px;
}

.search::placeholder {
    color: #bbb;
}

@keyframes show-easy {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
}

@keyframes pull-down {
    0% {
        height: 0;
    }

    50% {
        min-height: 100px;
    }

    100% {
        min-height: 200px;
    }
}
</style>
