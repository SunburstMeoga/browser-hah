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
    <div class="bg-gray300">
        <div class="pt-3">
            <div class="flex bg-gray100 rounded-lg justify-start items-center w-11/12 mr-auto ml-auto h-9 overflow-hidden"
                :class="isFocus ? 'focused' : ''">
                <div class="icon iconfont icon-search pr-2 pl-3 text-gray" />
                <div class="flex-1 h-full">
                    <input type="text" :placeholder="$t('common.placeholder')" @focus="focusSearch" @blur="blurSearch"
                        class="search w-full h-full bg-gray100 rounded-sm" />
                </div>
            </div>
            <div class="w-11/12 mr-auto ml-auto mt-4 flex justify-start flex-wrap show-easy" v-show="showSearchCriteria">
                <div class="text-gray100 flex justify-start items-center text-sm bg-gray200 py-1 px-2 mr-6 rounded-sm mb-2"
                    v-for="(item, index) in searchCriteriaList" :key="index">
                    <div class="icon iconfont text-lg" :class="item.icon"></div>
                    <div class="pl-1">{{ item.title }}</div>

                </div>
            </div>
        </div>
        <div class="flex justify-between items-center w-11/12 py-3 ml-auto mr-auto">
            <div class="flex items-center">
                <div class="w-32">
                    <img class="object-contain" src="../../assets/images/custom/logo.png" alt="$t('common.browser')">
                </div>
            </div>
            <div>
                <div class="icon iconfont text-gray100 text-3xl" :class="!showMenu ? 'icon-menu' : 'icon-close'"
                    @click="clickMenu" />
            </div>
        </div>
        <div v-show="showMenu" class="menu bg-transparent w-full">
            <div class="divide-y divide-gray-700 w-11/12 mr-auto ml-auto bg-gray200 rounded-lg">
                <div class="show-easy flex justify-between text-gray100 px-4 py-3" v-for="(item, index) in pagesList"
                    :key="index" @click="toPage(item.path)">
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
            // options: [{
            //     value: 1,
            //     label: 'address',
            // }, {
            //     value: '2',
            //     label: 'block'
            // }, {
            //     value: '3',
            //     label: 'tx'
            // }],
            // value: 1,
            // search_text: '',
            // openFlag: false,
            // openLanguage: false,
            // openLanguageDiv: false,
            // langFlag: 'zh-CN',
            // langText: '中文',
            // language:
            //     [
            //         {
            //             value: 'zh-CN',
            //             label: '中文'
            //         },
            //         {
            //             value: 'en-US',
            //             label: 'English'
            //         }
            //     ],
            pagesList: [
                { title: this.$t('eTopBar.home'), path: '/' },
                { title: this.$t('eTopBar.rich'), path: '/rich' },
                { title: 'dpos', path: '/dpos' },
                { title: 'HRC20', path: '/hrc20' }
            ],
            showMenu: false,
            showSearchCriteria: false,
            isFocus: false,
            searchCriteriaList: [
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
    created() { this.getDefaultLanguage() },
    methods: {
        focusSearch() {
            console.log('获取焦点')
            this.showSearchCriteria = true
            this.showMenu = false
            this.isFocus = true
        },
        blurSearch() {
            console.log('失去焦点')
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
        // toRank() {
        //     this.$router.push({
        //         path: '/rank'
        //     })
        // },
        // toDpos() {
        //     this.$router.push({
        //         path: '/dpos'
        //     })
        // },
        // toHRC20() {
        //     this.$router.push({
        //         path: '/hrc'
        //     })
        // },
        // toHome() {
        //     this.$router.push({
        //         path: '/'
        //     })
        // },
        search() {
            console.log("111111", this.value, '222222', this.search_text)
            if (this.value == 1) {
                this.$router.push({ path: "address", query: { hash: this.search_text } });
            } else if (this.value == 2) {
                this.$router.push({ path: "block", query: { hash: this.search_text } });
            } else {
                this.$router.push({ path: "tx", query: { txid: this.search_text } });
            }
        },

        chooseLanguage(value) {
            this.openLanguage = false
            this.$i18n.locale = value
        },
        showLanguage() {
            this.openLanguage = true

        },
        hideLanguage() {
            this.openLanguage = false
        },
        changeLanguages() {
            localStorage.setItem('virtualCurrencyLocale', this.langFlag)
            this.$i18n.locale = localStorage.getItem('virtualCurrencyLocale')

            //console.log(this.$i18n.locale)
            //this.$i18n.locale = this.langFlag;
        },
        getDefaultLanguage() {
            var virtualCurrencyLocale = localStorage.getItem('virtualCurrencyLocale')
            if (virtualCurrencyLocale == 'en-US') {
                this.langFlag = 'en-US'
                this.langText = 'English'
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
    border: 1px solid #f1b434;
}

.search {
    caret-color: #f1b434;
    text-indent: 4px;
}

.search::placeholder {
    color: #202a2b;
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

.box {
    width: 50px;
    height: 50px;
    background-color: pink;
    animation-name: test;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes test {
    50% {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: skyblue;
    }
}
</style>
