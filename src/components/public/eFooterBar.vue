<template>
    <!-- <div isHome="true" class="footer_wrap cn" data-v-35696748 data-v-02b3c3b7>

        <el-row :gutter="20">

            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div>
                    <span>{{$t('eFooterBar.link')}}</span>
                    <a href="javascript:void(0);" class="social">
                    <img src="../../assets/images/custom/twitter.png" class="fa fa-twitter">
                    </a>
                    <a href="javascript:void(0);" class="social">
                     <img src="../../assets/images/custom/facebook.png" class="fa fa-twitter">
                    </a>
                    <a :href="this.globalString.githubLink" target="_blank" class="social">                    
                        <img src="../../assets/images/custom/logo.png" class="fa fa-web">                    
                    </a>
                    
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="12">
                <div>
                    <p class="text-center reset">
                    <a :href="this.globalString.githubBrowserLink"  target="_blank"  class="btn btn-default btn-lg btn-gh">
                    <i class="fa fa-github"></i>
                    {{$t('eFooterBar.fork')}}
                    </a>
                    </p>        
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div>
                    <p class="text-right">
                    {{$t('eFooterBar.power')}} <a :href="this.globalString.companyWebsite"  target="_blank" >{{this.globalString.company}} {{$t('eFooterBar.webService')}}</a><br>
                    © 2022 - {{this.globalString.company}}
                    </p>
                </div>
            </el-col>
          
        </el-row>
    </div> -->
    <div class="bg-lightprimary dark:bg-black400">
        <div class="w-11/12 mr-auto ml-auto mb-10">
            <div class="py-6 border-b border-lightbottom dark:border-border100">
                <div class="flex justify-start items-center">
                    <div class="flex justify-center items-center w-8 h-8 rounded-full icon iconfont mr-2 bg-lightborder dark:text-white300 dark:bg-border100"
                        :class="item.icon" v-for="(item, index) in socialList" :key="index" />
                </div>
            </div>
        </div>

        <div class="w-11/12 mr-auto ml-auto pb-6 border-b border-lightbottom dark:border-border100">
            <div class="mb-10">
                <div class="flex justify-start items-center mb-2">
                    <div class="w-8 h-8 overflow-hidden rounded">
                        <img class="w-full h-full object-cover" src="../../assets/images/custom/logo.jpg" alt="">
                    </div>
                    <div class="pl-2 font-bold text-sm text-lighttable dark:text-white200">
                        Powered by Hash Ahead
                    </div>
                </div>
                <div class="leading-normal text-xs mb-2 text-lighttable dark:text-white200">
                    {{ $t('Index.h2') }}
                </div>
            </div>
            <div class="flex justify-between flex-wrap">
                <div class="w-6/12 text-sm mb-6 text-lighttable dark:text-white300" v-for="(item, index) in tankList"
                    :key="index">
                    <div class="font-bold text-sm mb-4">{{ item.title }}</div>
                    <div class="font-normal mb-4" v-for="(_item, _index) in item.details" :key="_index">
                        {{ _item.title }}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-11/12 ml-auto mr-auto text-xs py-6 text-lighttable dark:text-white300">
            Hash Ahead © 2022 - Block_Way
        </div>
    </div>
</template>

<script>
export default {
    name: "eFooterBar",
    data() {
        return {
            tankList: [
                {
                    title: 'Company',
                    details: [
                        {
                            title: 'About Us'
                        },
                        {
                            title: 'About Us'
                        },
                        {
                            title: 'About Us'
                        },
                        {
                            title: 'About Us'
                        },
                        {
                            title: 'About Us'
                        },
                        {
                            title: 'About Us'
                        },
                    ]
                },
                {
                    title: 'Community',
                    details: [
                        {
                            title: 'API Documentation'
                        },
                        {
                            title: 'API Documentation'
                        },
                        {
                            title: 'API Documentation'
                        },
                        {
                            title: 'API Documentation'
                        },
                        {
                            title: 'API Documentation'
                        }
                    ]
                },
                {
                    title: 'Product & Services',
                    details: [
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        },
                        {
                            title: 'Advertise'
                        }
                    ]
                }
            ],
            socialList: [
                {
                    path: '',
                    icon: 'icon-zimuH'
                },
                {
                    path: '',
                    icon: 'icon-twitter-fill'
                },
                {
                    path: '',
                    icon: 'icon-github'
                },
                {
                    path: '',
                    icon: 'icon-instagram-fill'
                },
                {
                    path: '',
                    icon: 'icon-facebook'
                },

            ]
        }
    }
}
</script>
