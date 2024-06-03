<template>
    <div>
        <div class="mb-2 w-11/12 sm:w-9/12 mr-auto ml-auto">
            <module-title title="DPOS" :total="totalAddress"></module-title>
        </div>
        <div
            class=" mb-4 w-11/12 sm:w-9/12 mr-auto ml-auto rounded-lg shadow-lg border bg-white border-ligthborder dark:bg-black200 dark:border-border100 dark:shadow">
            <dpos-list-table :dataList="dposListDatas" :loadStatus="dposListLoadStatus" />
            <!-- <div class="">
                <h-pagination @changePageSize="toDposFirstPage" @toFirstPage="toDposFirstPage"
                    @toPrePage="toDposPrePage" @toNextPage="toDposNextPage" @toLastPage="toDposLastPage"
                    :currentPage="dposCurrentPage" :totalPage="totalPage"
                    @toTargetPage="toDposTargetPage"></h-pagination>
            </div> -->
        </div>
    </div>
</template>


<script>
import ModuleTitle from '@/components/public/ModuleTitle'
import HPagination from '@/components/public/HPagination'
import DposListTable from '@/components/child/DposListTable'
import { listDelegate } from '@/request/dpos'
import { numberFormat } from '../../utils/format'
export default {
    components: { DposListTable, ModuleTitle, HPagination, },
    name: "dpos",
    data() {
        return {
            dposListDatas: [],
            dposListLoadStatus: 'loading',
            dposPageSize: 10,
            dposCurrentPage: 1,
            totalAddress: 0,
            totalPage: 1
        }
    },
    created() {
        // this.getListDelegate()
        this.dposListLoadStatus = 'finished',
            this.dposListDatas = [
                {"name":"Aurora" + 'Node', "address": "0xb1F86b9def8544fa0fE9187571CAc3320a86976B", "mnemonic": "seven degree upgrade release lava amount danger family flat glow thought tree", "privateKey": "0xb894aba2f7e0e136be283f49cb0a3451da5342b58bd956833b3d50c7104f37e5" },
                {"name":"Polaris" + 'Node', "address": "0x87f4DC2C0fF0c318cd3908C929b677DC7668F587", "mnemonic": "empty rotate enemy receive rubber correct describe grocery right unit develop yard", "privateKey": "0x5fd461c8009c7bdf21a1fe52575bc026e6cdcfde47103d5a4db2da80ae22d8c2" },
                { "name":"Orion" + 'Node',"address": "0x875e15fC766a29C26554055990fEc239fD91B8D7", "mnemonic": "merit report prize vehicle divide whip beach mention naive wolf opinion road", "privateKey": "0x902beb7da764d2877a90c71510215cf98a1a1198712db80da9b413e4221b0f4d" },
                { "name":"Vega" + 'Node',"address": "0x075E0aB5943C6047f9BE6bE4b3Dd404A8B08BF98", "mnemonic": "disorder casual divide lottery until remove shell occur monster benefit render assault", "privateKey": "0xdd5017ca10c11567bf1108ddfab9271a793b1b84e4a4f7b9973f57121fbfc2e6" },
                { "name":"Sirius" + 'Node',"address": "0xe3f72637A64c58B846a46278b5e15BCA4E5A4ce9", "mnemonic": "neither exotic obtain depth debris dizzy bicycle aisle thing shy jealous elbow", "privateKey": "0xb715044f26f31e0e3a5a2ee8aa10a25f282d170b835791af811bef30c0a7fefe" },
                { "name":"Lyra" + 'Node',"address": "0x1fd7ae70c9286149B83A97291a43C392da9e8DaA", "mnemonic": "steel into smart toddler area fire float ten cat quote blood cup", "privateKey": "0xcbfbe60c9b268f5a14dd5127cb7b843a1679092be6b62b6b3f2032d5d73a5942" },
                {"name":"Phoenix" + 'Node',"address": "0xa90C05F71ff6BFf7EdDDFb0b1fbfD155216AA57f", "mnemonic": "risk draw tornado three vivid pioneer novel reason remove begin auction high", "privateKey": "0x3e0b91a6cba1f329df063c23b6aea7b2f8c44fc7b5eb514866f350b7bd144459" },
                {"name":"Draco" + 'Node',"address": "0x08b948e72A33AA5C5391996e844B0deCbe0a8080", "mnemonic": "dash pill annual tongue material before enable edge winter aisle tissue enhance", "privateKey": "0x8275cd52831dc4619902ddc56c32c2a58469b59e5a43965d16342d9b442cf83f" },
                { "name":"Hydra" + 'Node',"address": "0xd8c2cbEBeC3FA859407db359f1c76ed43fAFf03f", "mnemonic": "luxury crane bicycle broccoli design casual wrap medal avocado enforce pitch lady", "privateKey": "0x498d32d4605b1af918fc918d79e2224bacbe6847dc7bb9af075d563c8de89708" },
                { "name":"Centaurus" + 'Node',"address": "0x0417f22cc3bc956C95B7580E26a352533f05b407", "mnemonic": "maximum memory gate flower bullet exhaust cliff eye warrior forget demand usual", "privateKey": "0x873ba704387eb81fac522e652e268a81f393d810922fd23fe7f9a51c89d60eb7" },
                {"name":"Pegasus" + 'Node', "address": "0x17BeDA58C83A6a32E81a8D91AA5705e919748a61", "mnemonic": "toss clarify frown such twenty mesh syrup review away write grunt excess", "privateKey": "0x0c1fc97a1d99ce9d2188aa7765b35318b3ecd4f37540114ca4f612ce93ac955f" },
                {"name":"Andromeda" + 'Node', "address": "0xb2343Bcb446Cb4d1C276B98E5BdCB892f3A84117", "mnemonic": "ranch goose hen leg warm pact ready reject animal carry tape fuel", "privateKey": "0xd9ad953057c50bb60cc3a9ee72943d4b10ad69e349b70c95ace21be4ac192328" },
                {"name":"Cassiopeia" + 'Node', "address": "0x06dF0D21bfEBDd74F734F90B9803f247Bf1EbD15", "mnemonic": "jar robust tone aunt aisle barely device hope brand mountain bacon foil", "privateKey": "0x15d4135e8d6b5f430dbb56c0c5a3345b6f93943a8fcc88bf1dd517984c306fef" },
                {"name":"Cygnus" + 'Node',"address": "0x04820b7de72c3FAeD97e62E6A368e499b21aC816", "mnemonic": "move dragon crush arrange bomb cloud bullet try tray repeat august tattoo", "privateKey": "0xf4f8f3d18ba63d5bc8e9da8b56c833369c89d3e81ab151663b9ffc779e60ea02" },
                {"name":"Gemini" + 'Node',"address": "0xc484EEb2f325889859200241CF862d3B50A120b0", "mnemonic": "local domain latin stable surge position regular viable mobile paper verb tiny", "privateKey": "0x6b3a6dda2a61fcddcc6fa434cd57aeed5da47f5e2e819726c68f70c6310d3004" },
                {"name":"Leo" + 'Node', "address": "0x4E3000Fdd7b303E367619A677C286EeC26A0783f", "mnemonic": "cancel despair aspect stay small gown demand nurse rail surge talk reject", "privateKey": "0x1b3c108d481ebabf223c0825709c792f1df23b45b639da409d99444556e72a3f" },
                {"name":"Taurus" + 'Node', "address": "0x09ad9459B30DDC74a3EeB031502432efFB59d41E", "mnemonic": "peasant canal sick very assault female title fee tent melody lamp olympic", "privateKey": "0x43ad2afcc29f183082e29cc5fcd3a4bad0988cae6203dd5fb6405611c30b8101" },
                { "name":"Aries" + 'Node',"address": "0xb859b9F3c38e113f18e318650D859eC5d87B21aF", "mnemonic": "category vintage chapter adjust urban index culture rapid angry fine august erode", "privateKey": "0xdabaa3ed5b8ca21a12e26c4fca418d8d5a9089629967ba4d6f217802c9c8f936" },
                {"name":"Sagittarius" + 'Node', "address": "0xf52078eE86B458eE22a020FDf709806a29658a47", "mnemonic": "giraffe fit runway misery citizen squeeze exit undo waste drama boat embark", "privateKey": "0x34b140e3e79f5a587c0e1e632e9cf591b8dace80c7755f780affa819f8e3a4a6" },
                {"name":"Capricornus" + 'Node', "address": "0xCe1a474A955cBDaFBb0e8953aC9154670dC2273e", "mnemonic": "purity swamp build illegal rely trophy worry crash razor observe below sport", "privateKey": "0x20d7712ec5c8753460e39ba0a2cddb0e7efb64d45c241f0a7731ea4122ed474a" },
                {"name":"Aquila" + 'Node', "address": "0xa8aff5cc20b25ef62f3C3Cb076285923c05d2939", "mnemonic": "around meadow nurse tank car cannon soccer okay glimpse spoon elegant raccoon", "privateKey": "0xe115b96e870ff9ff298391f8b3eed5d40d73f07a16a4c5b413084aaf96cb6b33" }
            ]
    },
    methods: {
        numberFormat,
        getListDelegate() {
            this.dposListLoadStatus = 'loading'
            listDelegate({ pageSize: this.dposPageSize, page: this.dposCurrentPage, chainid: parseInt(localStorage.getItem('chainID')) }).then(res => {
                if (res.data.length !== 0) {
                    this.dposListDatas = res.data
                    this.dposListLoadStatus = 'finished'
                    console.log(this.dposListDatas)

                } else {
                    this.dposListLoadStatus = 'empty'
                }
                console.log(res)
                // this.totalAddress = this.$t('moduleTitle.totalNode', { count: numberFormat(res.total) })
                this.totalAddress = res.total
                this.totalPage = res.totalPage
                this.dposCurrentPage = res.page

            });
        },
        toDposFirstPage(selectedPageSize) {
            console.log('第一页')
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposPrePage(selectedPageSize) {
            if (this.dposCurrentPage === 1) {
                return
            }
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = this.dposCurrentPage - 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposNextPage(selectedPageSize) {
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = this.dposCurrentPage + 1
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposLastPage(selectedPageSize) {
            console.log(this.dposCurrentPage, this.totalPage)
            if (this.dposCurrentPage >= this.totalPage) {
                return
            }
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = this.totalPage
            this.dposListDatas = []
            this.getListDelegate()
        },
        toDposTargetPage(selectedPageSize, targetPage) {
            console.log(targetPage)
            if (targetPage <= 0) {
                return
            }
            this.dposPageSize = selectedPageSize
            this.dposCurrentPage = targetPage
            this.dposListDatas = []
            this.getListDelegate()
        }
    },
}
</script>

<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {}

a {
    color: #2d8cf0;
}
</style>