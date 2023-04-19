module.exports = {
  common: {
    browser: 'HAH浏览器',
    address: '地址',
    block: '区块',
    tx: '交易',
    placeholder: '搜索地址 / 区块 / 交易',
    search: '搜索',
    more: '查看更多',

  },
  eFooterBar: {
    link: '链接',
    fork: 'GitHub地址',
    power: '技术支持',
    webService: '网络服务',
  },
  eTopBar: {
    home: '首页',
    rich: '富豪榜',
    alt: '浏览器可查询链上的所有所有信息包括最新爆块，最新交易信息等，区块内的交易等等',
  },
  Address: {
    addressInfo: '地址信息',
    address: '普通地址',
    balance: '余额',
    totalRevenue: '总收入',
    totalTransferOut: '总转出',
    rank: '排行',
    transactions: '交易',
    hash: '交易哈希',
    time: '时间',
    block: '所在块',
    txFee: '交易费',
    locked: '锁定余额',
    hidden: '收起'
  },
  Block: {
    blockInfo: '区块信息',
    blockHASH: '区块HASH',
    returnHome: '返回爆块首页',
    time: '时间',
    transactions: '交易数量',
    previousBlock: '上一区块',
    address: '播报方',
    reward: '爆块奖励',
    tx: '交易',
    block: '所在块',
    txFee: '交易费',
    hash: '交易哈希',
    blockStatistics: '区块统计'
  },
  BlockList: {
    h1: '浏览器查询链上最新爆块，爆块时间，区块大小，播报方。',
    h2: '浏览器展示最新爆块，包括最新爆块时间，tps, 平均出块时间，区块高度，播报方，大小，奖励，交易笔数，交易总额。',
    newBlock: '最新暴块',
    height: '区块高度',
    address: '播报方',
    reward: '爆块奖励',
    amount: '交易数量',
    previousBlock: '上一哈希',
    time: '时间',
  },
  dpos: {
    h1: 'dpos pow',
    h2: '浏览器展示dpos，包括地址，投票和类型。',
    dpos: 'dpos',
    serialNumber: '序号',
    address: '地址',
    vote: '投票',
    name: '名称',
  },
  dposDetail: {
    h1: 'dpos pow detail',
    h2: '浏览器展示dpos明细',
    dposDetail: 'dpos 明细-',
    serialNumber: '序号',
    address: '客户地址',
    amount: '金额',
    time: '时间',
    height: '高度',
    voteType: '投票类型',
    tranType: '交易类型',
    datavote: '投票',
    datawithdrawal: '撤投',
    ordinary: '普通',
    recasting: '复投'
  },
  Index: {
    h2: '区块链浏览器是全球范围内数据最精准，速度最快速的浏览器，用户可以使用区块链浏览器搭建钱包以及使用查询和搜索链上的所有区块链数据信息。',
  },
  Pending: {
    h1: '浏览器查询链上待确认交易，待确认交易数量，交易费。',
    h2: '浏览器可查询待确认交易，包括交易的交易数，交易额，Token交易笔数，总合约交易笔数等。',
    tx: '交易',
    hash: '交易哈希',
    time: '时间',
    amount: '交易金额',
    from: 'from地址',
    to: 'to地址',
  },
  Rank: {
    h1: '浏览器查询区块链及代币富豪榜',
    h2: '浏览器展示富豪榜，包括富豪排名，富豪地址和交易金额。',
    rich: '富豪榜',
    rank: '名次',
    address: '地址',
    balance: '余额',
    yield: '百分比',
    notRank: '暂无排名'
  },
  Tx: {
    txInfo: '交易信息',
    block: '所在块',
    time: '时间',
    from: 'from地址',
    to: 'to地址',
    txAmount: '转账金额',
    txFee: '交易费',
    dpos_in: '投票节点地址',
    dpos_out: '撤投节点地址',
    client_in: '投票客户地址',
    client_out: '撤投客户地址',
    nodeName: '节点名称',
    voteAmount: '投票量',
    nodeDetails: '节点详情'
  },
  el: {
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共{total}条',
      pageClassifier: '页'
    }
  },
  routes: {
    browser: '区块链浏览器',
    home: '区块链浏览器-首页',
    blockList: '区块链浏览器-区块列表',
    txList: '区块链浏览器-交易',
    block: '区块链浏览器-区块',
    address: '区块链浏览器-地址',
    tx: '区块链浏览器-交易信息',
    rank: '区块链浏览器-排行',
    dpos: '区块链浏览器-dpos',
    dposDetail: '区块链浏览器-dposDetail',
    main: '区块链浏览器-main',
  },
  hrc20: {
    hrc20: 'HRC20',
    owner: '合约作者',
    name: '合约名称',
    symbol: '合约符号',
    decimals: '货币小数位',
    totalSupply: '发行总量',
    overview: '概述',
    profileSummary: '个人资料摘要',
    quantity: '数量',
    method: '方法'
  },
  footBar: {
    title: '由Hash Ahead提供支持',
    company: '公司',
    aboutUs: '关于我们',
    Product: '产品与服务',
    vote: 'HAH投票系统',
    faucet: 'HAH水龙头',
    browser: 'HAH浏览器',
  },
  pagination: {
    show: '每页显示',
    records: '条记录',
    first: '第一页',
    last: '最后一页'
  },
  faucetSmart: {
    title: 'HAH智能链水龙头',
    button: '获取HAH测试币',
    errAddress: '请输入正确的地址',
    released: '已发放 1 HAH到该地址',
    repeat: '不能重复申请',
    othererr: '系统错误，请重试'
  },
  moduleTitle: {
    totalBlocks: '共有{count}个区块',
    totalTrade: '找到超过 {count} 笔交易',
    totalRanks: '共有 {count} 个地址',
    totalNode: '共有 {count} 个DPOS节点',
    totalContract: '共有 {count} 个HRC20',
    totalData: '共有 {count} 条数据'
  },
  messageTips: {
    copySuccess: '复制成功',
    copyFail: '复制失败，请重新复制',
    noMore: '无更多数据'
  },
  status: {
    success: '成功',
    fail: '失败'
  },
  logs: {
    title: '交易日志',
    count: '交易收据事件日志（{count})',
    address: '地址',
    topics: '主题',
    data: '数据',
    executionStatus: '执行状态',
    internalTransfers: 'HRC20转账'
  },
  tradeDetails: {
    height: '区块高度',
    hash: '交易HASH',
    GASLimit: 'GAS上限',
    tradeType: '交易类型',
    GASPrice: 'GAS价格',
    contractCreate: '合约创建',
    contractInvoke: 'ETH调用',
    genesis: '创世',
    stake: 'DPOS挖矿',
    token: '普通',
    voteReward: '收益',
    work: 'Pow挖矿'
  },
  overview: {
    out: '输出金额'
  }
}