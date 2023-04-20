<template>
    <div class="relative w-full mb-2 sm:mb-6 sm:py-1 bg-white border-b border-lightborder dark:border-border100 dark:bg-black400"
        style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
        <div class="w-full sm:w-10/12 sm:mr-auto sm:ml-auto sm:flex sm:justify-between sm:items-center">
            <!--  logo and theme language menu -->
            <div class="flex w-full justify-between items-center flex-wrap py-3 ml-auto mr-auto sm:flex-nowrap ">
                <!-- search -->
                <div class="flex items-center ml-3 sm:order-1">
                    <div class="w-32">
                        <img class="object-contain" src="../../assets/images/custom/logo.png" alt="$t('common.browser')">
                    </div>
                </div>

                <!-- pc menu router-->
                <div class="hidden sm:mr-4 sm:flex sm:order-3 sm:flex-1 sm:justify-end text-black dark:text-grayword">
                    <div class="sm:py-2 sm:px-5 cursor-pointer hover:text-clickable transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-110 hover:font-extrabold"
                        @click="toPage(item.path)" v-for="(item, index) in pagesList" :key="index">
                        {{ item.title }}
                    </div>
                </div>

                <div class="flex justify-end items-center mr-4 sm:order-4">
                    <!-- theme -->
                    <div
                        class="cursor-pointer rounded-lg flex items-center justify-center w-7 h-7 border border-lightborder hover:bg-lightborder dark:hover:bg-border100 dark:border-border100 mr-2">
                        <div class="icon iconfont text-2xl text-lighticon dark:text-grayicon"
                            :class="$store.state.isDark ? 'icon-night-mode' : 'icon-daytime-mode'" @click="changeTheme" />
                    </div>
                    <!-- language -->
                    <div class="cursor-pointer rounded-lg flex items-center justify-center w-7 h-7 border sm:ml-4 border-lightborder hover:bg-lightborder dark:hover:bg-border100 dark:border-border100 mr-2"
                        @click="changeLanguages">
                        <div class="icon iconfont icon-language text-2xl text-lighticon dark:text-grayicon" />
                    </div>
                    <!-- mobile menu -->
                    <div
                        class="rounded-lg flex items-center justify-center w-7 h-7 border sm:hidden border-lightborder dark:border-border100">
                        <div class="icon iconfont text-lighticon text-2xl dark:text-grayicon"
                            :class="!showMenu ? 'icon-menu' : 'icon-close'" @click="clickMenu" />
                    </div>
                </div>

                <div
                    class="pt-3 mt-2 w-full border-t sm:flex sm:ml-4 sm:justify-start sm:items-center sm:border-none sm:mt-0 sm:pt-0 sm:order-2 sm:w-1/3 border-lightborder dark:border-border100">
                    <div class="flex rounded-lg justify-start items-center w-11/12 mr-auto ml-auto h-9 overflow-hidden border border-b border-lightborder dark:border-border100 dark:bg-black400"
                        :class="isFocus ? 'focused' : ''">
                        <div class="icon iconfont icon-search pr-2 pl-3 sm:hidden text-lightword dark:text-black100" />
                        <div class="sm:h-20 sm:z-50 hidden relative sm:flex items-center justify-around cursor-pointer px-4 h-9 text-sm text-black dark:text-grayword"
                            @click="shwoPCSearch = true">
                            <div>{{ pcSearchTarget || $t('common.address') }}</div>
                            <div class="icon iconfont icon-down text-sm ml-1 text-black dark:text-grayword" />
                        </div>
                        <div class="flex-1 h-full ">
                            <input type="text" :placeholder="$t('common.placeholder')" @focus="focusSearch"
                                @blur="blurSearch"
                                class="search w-full h-full text-sm rounded-sm text-black dark:text-grayword dark:bg-black400"
                                v-model="searchContent" />
                        </div>
                    </div>
                    <div class="hidden cursor-pointer text-sm sm:flex items-center justify-center w-28 h-9 border ml-4 rounded-lg border-lightborder hover:bg-lightborder text-black dark:text-grayword dark:hover:bg-border100 dark:border-border100"
                        @click="pcToSearch">
                        {{ $t('common.search') }}
                    </div>
                    <div class="w-11/12 mr-auto ml-auto mt-4 flex justify-start flex-wrap show-easy sm:hidden"
                        v-show="showSearchCriteria">
                        <div class="flex justify-start items-center text-sm px-2 mr-6 rounded-lg mb-2 text-lighttable border border-lightborder dark:border-border100 dark:bg-black300 dark:text-black100"
                            v-for="(item, index) in searchCriteriaList" :key="index" @click="handleSearch(item)">
                            <div class="icon iconfont text-lg" :class="item.icon"></div>
                            <div class="pl-1">{{ item.title }}</div>

                        </div>
                    </div>
                </div>
            </div>

            <!--mobile menu router -->
            <div v-show="showMenu" class="menu bg-transparent w-full sm:hidden">
                <div class="mr-auto ml-auto bg-white dark:bg-black400">
                    <div class="show-easy flex justify-between text-lighttable dark:text-grayword px-4 py-3 border-b-1 border100"
                        v-for="(item, index) in pagesList" :key="index" @click="toPage(item.path)">
                        <div class="text-sm"> {{ item.title }}</div>
                        <div class="icon iconfont icon-arrow-right text-sm"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="show-easy hidden absolute border-t-4 border-clickable w-40 sm:block left-1/10 bg-white rounded-b-lg"
            @mouseleave="shwoPCSearch = false" v-show="shwoPCSearch"
            style="box-shadow:0 0.5rem 1.2rem rgba(82, 85, 92, .15);">
            <div class="cursor-pointer flex justify-start items-center px-4 text-sm py-2 dark:bg-black400 dark:text-grayword hover:bg-lightborder dark:hover:bg-border100"
                @click="pcSearchChange(item.title, item.path)" v-for="(item, index) in searchCriteriaList" :key="index">
                <div class="icon iconfont mr-3" :class="item.icon" />
                <div>{{ item.title }}</div>
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
            timer: null,
            shwoPCSearch: false,
            pcSearchTarget: '',
            pcSearchPath: '/address/',
        }
    },
    computed: {
        pagesList() {
            return [
                { title: this.$t('eTopBar.home'), path: '/' },
                { title: this.$t('eTopBar.rich'), path: '/rank' },
                { title: 'DPOS', path: '/dpos' },
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
        pcToSearch() {
            this.handleSearch(this.pcSearchPath)
        },
        pcSearchChange(title, path) {
            this.pcSearchTarget = title
            this.pcSearchPath = path
            this.shwoPCSearch = false
        },
        handleSearch(item) {
            console.log(item)
            console.log(this.$route)
            // return
            if (this.searchContent) {
                this.$router.push({
                    path: item.path + this.searchContent
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
            if (this.$route.path === '/') {
                this.$router.replace({ path: '/empty' })
            }
            console.log(this.$i18n.locale)
            console.log(this.$route.path)
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
