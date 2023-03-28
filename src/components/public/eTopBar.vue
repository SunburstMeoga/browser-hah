<!-- <template>
    <div>
        <div class="layout-header" data-v-02b3c3b7>
            <div class="head cn">
                <div class="topMenu">
                    <div class="box">
                        <div class="btns">

                        </div>
                    </div>
                </div>
            </div>

            <div class="header_wrap btc">
                <div class="box"><a href="/" data-tracking="coins-header-home" :alt="$t('eTopBar.alt')"
                        :title="$t('common.browser')">
                        <div class="order">
                            <div class="menu icon-menu"></div>
                            <img src="../../assets/images/custom/logo.png" alt="$t('common.browser')" class="coinlogo">
                            <div class="coin_name">{{ $t('common.browser') }}</div>
                        </div>
                    </a>
                    <div class="inner_header">
                        <div class="rt" style="min-width:500px;">
                            <ul class="bottom">
                                <li class="item active" @click="toHome">{{ $t('eTopBar.home') }}
                                </li>
                                <li class="item active" @click="toRank">{{ $t('eTopBar.rich') }}
                                </li>
                                <li class="item active" @click="toDpos">
                                    dpos
                                </li>
                                <li class="item active" @click="toHRC20">
                                    HRC20
                                </li>
                                <el-select v-model="langFlag" @change="changeLanguages" class="language-select"
                                    :filterable="true" style="width: 130px;" placeholder="please choose language">
                                    <el-option :key="item.value" v-for="item in language" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div class="mobile_header">
                <div class="head_menu"><a href="/" data-tracking="coins-header-home">
                        <div class="coin_name"><img src="../../assets/images/custom/logo.png" alt="" class="icon">
                            {{ $t('common.browser') }}
                        </div>
                    </a>
                    <div :class="{ 'menu': true, 'openmenu': !openFlag, 'closemenu': openFlag }" @click="toggleMenu"></div>
                </div>

                <ul class="smallUl menu-card" v-if="openFlag">
                    <li class="item active"><a href="/" alt="" title="$t('common.browser')"
                            data-tracking="coins-header-home">{{ $t('eTopBar.home') }}</a></li>
                    <li class="item active"><a href="rank" alt="" title="$t('common.browser')"
                            data-tracking="coins-header-home">{{ $t('eTopBar.rich') }}</a></li>
                    <li class="item active"><a href="dpos" alt="" title="$t('common.browser')"
                            data-tracking="coins-header-home">dpos</a></li>
                    <el-select v-model="langFlag" @change="changeLanguages" class="language-select"
                        :default-first-option="true" :filterable="true" style="width: 130px;"
                        placeholder="please choose language">
                        <el-option :key="item.value" v-for="item in language" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </ul>

            </div>



        </div>

        <div class="search_area" data-v-4196e052 data-v-02b3c3b7>
            <div class="search_box" data-v-4196e052>
                <div class="filter_box" data-v-4196e052>
                    <el-select v-model="value">
                        <el-option v-for="item in options" :key="item.value" :label="$t('common.' + item.label)"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <input type="text" :placeholder="$t('common.placeholder')" value="" class="search" data-v-4196e052
                    v-model="search_text">
                <div class="search_btn" data-v-4196e052 @click="search()">{{ $t('common.search') }}</div>
            </div>
            <div class="header_tips" data-v-4196e052></div>
        </div>


    </div>
</template> -->
<template>
    <div class="bg-white dark:bg-black200 mb-4">
        <!-- search -->
        <div class="static left-0 top-0 py-2 border border-b border-ligthborder dark:border-border100">
            <div class="flex rounded-lg justify-start items-center w-11/12 mr-auto ml-auto h-9 overflow-hidden border border-ligthborder dark:border-border100 dark:bg-black400"
                :class="isFocus ? 'focused' : ''">
                <div class="icon iconfont icon-search pr-2 pl-3 text-ligthword dark:text-black100" />
                <div class="flex-1 h-full ">
                    <input type="text" :placeholder="$t('common.placeholder')" @focus="focusSearch" @blur="blurSearch"
                        class="search w-full h-full rounded-sm dark:bg-black400" />
                </div>
            </div>
            <div class="w-11/12 mr-auto ml-auto mt-4 flex justify-start flex-wrap show-easy" v-show="showSearchCriteria">
                <div class="flex justify-start items-center text-sm px-2 mr-6 rounded-lg mb-2 border text-lighttable border-ligthborder dark:bg-black300 dark:border-border100 dark:text-black100"
                    v-for="(item, index) in searchCriteriaList" :key="index">
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
                    class="rounded-lg flex items-center justify-center w-7 h-7 border border-ligthborder dark:border-border100 mr-2">
                    <div class="icon iconfont text-2xl text-ligthicon dark:text-grayicon"
                        :class="$store.state.isDark ? 'icon-night-mode' : 'icon-daytime-mode'" @click="changeTheme" />
                </div>
                <!-- language -->
                <div class="rounded-lg flex items-center justify-center w-7 h-7 border border-ligthborder dark:border-border100 mr-2"
                    @click="changeLanguages">
                    <div class="icon iconfont icon-language text-2xl text-ligthicon dark:text-grayicon" />
                </div>
                <!-- menu -->
                <div
                    class="rounded-lg flex items-center justify-center w-7 h-7 border border-ligthborder dark:border-border100">
                    <div class="icon iconfont text-ligthicon text-2xl dark:text-grayicon"
                        :class="!showMenu ? 'icon-menu' : 'icon-close'" @click="clickMenu" />
                </div>
            </div>
        </div>
        <!-- menu router -->
        <div v-show="showMenu" class="menu bg-transparent w-full border-b border-ligthborder dark:border-border100">
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
        }
    },
    computed: {
        pagesList() {
            return [
                { title: this.$t('eTopBar.home'), path: '/' },
                { title: this.$t('eTopBar.rich'), path: '/rich' },
                { title: 'dpos', path: '/dpos' },
                { title: 'HRC20', path: '/hrc20' }
            ]
        },
        searchCriteriaList() {
            return [
                {
                    title: this.$t('common.address'),
                    icon: 'icon-shouhuodizhi'
                },
                {
                    title: this.$t('common.block'),
                    icon: 'icon-qukuai'
                },
                {
                    title: this.$t('common.tx'),
                    icon: 'icon-jiaoyiguanli'
                },
            ]
        }
    },
    methods: {
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
            this.showSearchCriteria = false
            this.isFocus = false
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
        search() {
            if (this.value == 1) {
                this.$router.push({ path: "address", query: { hash: this.search_text } });
            } else if (this.value == 2) {
                this.$router.push({ path: "block", query: { hash: this.search_text } });
            } else {
                this.$router.push({ path: "tx", query: { txid: this.search_text } });
            }
        }
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
