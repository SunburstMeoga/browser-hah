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
        <div class="flex justify-between items-center w-11/12 py-3 ml-auto mr-auto">
            <div class="flex items-center">
                <div class="w-32">
                    <img class="object-contain" src="../../assets/images/custom/logo.png" alt="$t('common.browser')">
                </div>
            </div>
            <div>
                <div class="icon iconfont icon-menu text-gray100 text-3xl" @click="clickMenu" />
            </div>
        </div>
        <div v-show="showMenu" class="menu bg-transparent">
            <div>
                <div class="page-list flex justify-between w-10/12 mr-auto ml-auto py-2 text-gray100 text-lg"
                    v-for="(item, index) in pagesList" :key="index" @click="toPage(item.path)">
                    <div class="text-lg"> {{ item.title }}</div>
                    <div class="icon iconfont icon-right"></div>
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
        }
    },
    created() { this.getDefaultLanguage() },
    methods: {
        clickMenu() {
            this.showMenu = !this.showMenu
        },
        toPage(path) {
            this.$router.push({
                path: path
            })
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
        toggleMenu() {
            this.openFlag = !this.openFlag

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

.page-list {
    opacity: 0;
    animation-name: show-easy;
    animation-duration: 0.8s;
    animation-delay: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
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
        height: 100px;
    }

    100% {
        height: 200px;
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
