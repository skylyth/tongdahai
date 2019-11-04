/**
** 顶部导航菜单及其二级菜单的完整列表，具体根据权限再做筛选
** 路由和导航统一设置
** path为自动根据name拼接
** 组件路径同理
** 自动生成meta.title
**/

export default [
  {
    title: '账户',
    name: 'account',
    children: [
      {
        title: '股东',
        name: 'agent-a',
        pcode: 'account.shareHolder'
      },
      {
        title: '总代理',
        name: 'agent-b',
        pcode: 'account.mainAgent'
      },
      {
        title: '代理',
        name: 'agent-c',
        pcode: 'account.agent'
      },
      {
        title: '会员',
        name: 'customer',
        pcode: 'account.customer'
      },
      {
        title: '试玩会员',
        name: 'trial',
        pcode: 'account.trialAccount'
      },
      {
        title: '子账号',
        name: 'child',
        pcode: 'account.childAccount'
      },
      {
        title: '变更上级',
        name: 'change-parent',
        pcode: 'account.changeParent'
      },
      {
        title: '用户组',
        name: 'group',
        pcode: 'setting.userGroup'
      },
      {
        title: '创建用户',
        name: 'create',
        path: 'create/:id',
        inmenu: false
      },
      {
        title: '代理详情',
        name: 'agent-detail',
        path: 'agent-detail/:id/:tab',
        inmenu: false
      },
      {
        title: '用户详情',
        name: 'user-detail',
        path: 'user-detail/:id/:tab',
        inmenu: false
      },
      {
        title: '编辑子账号',
        name: 'child-editor',
        path: 'child-editor/:id',
        inmenu: false
      },
      {
        title: '用户组设置',
        name: 'group-set',
        path: 'group-set/:id',
        inmenu: false,
        breadcrumb: [
          { title: '用户组', name: 'group' }
        ]
      },
      {
        title: '用户组支付方式',
        name: 'group-pay',
        path: 'group-pay/:id',
        inmenu: false
      }
    ]
  },
  {
    title: '数据',
    name: 'report',
    children: [
      {
        title: '数据总览',
        name: 'overview',
        pcode: 'report.financeReport'
      },
      {
        title: '交收报表',
        name: 'settlement',
        pcode: 'report.settlementReport'
      },
      {
        title: '注单报表',
        name: 'order',
        pcode: 'report.orderReport'
      },
      {
        title: '产品报表',
        name: 'game',
        pcode: 'report.gameReport'
      },
      {
        title: '投注报表',
        name: 'betting',
        pcode: 'report.settlementUserReport'
      },
      {
        title: '金流记录',
        name: 'cashflow',
        pcode: 'cash.cashHistory'
      },
      {
        title: '存取款记录',
        name: 'transfer',
        pcode: 'cash.transferHistory'
      }
    ]
  },
  {
    title: '财务',
    name: 'finance',
    children: [
      {
        title: '人工存入',
        name: 'manual-deposit',
        pcode: 'cash.manualCashin'
      },
      {
        title: '人工取出',
        name: 'manual-withdraw',
        pcode: 'cash.manualCashout'
      },
      {
        title: '返佣记录',
        name: 'rake-back',
        pcode: 'cash.rakeback'
      },
      {
        title: '入款核查记录',
        name: 'deposit-check-history',
        pcode: 'cash.userCashFlowLimitHistory'
      },
      {
        title: '红包统计',
        name: 'red-packet',
        path: 'red-packet/:tab',
        pcode: 'setting.finance'
      },
      {
        title: '财务配置',
        name: 'finance-config',
        pcode: 'setting.finance'
      },
      {
        title: '公司入款',
        name: 'company-deposit',
        inmenu: false
      },
      {
        title: '在线入款',
        name: 'online-deposit',
        inmenu: false
      },
      {
        title: '出款审核',
        name: 'withdraw-check',
        inmenu: false
      },
      {
        title: '等待出款',
        name: 'withdraw-wait',
        inmenu: false
      },
      {
        title: '代理充值管理',
        name: 'agency-deposit',
        inmenu: false
      }
    ]
  },
  {
    title: '系统',
    name: 'setting',
    children: [
      {
        title: '产品配置',
        name: 'game',
        pcode: 'setting/games'
      },
      {
        title: '产品配置',
        name: 'game-setting',
        path: 'game-setting/:code/:id/:type',
        pcode: 'setting/games',
        inmenu: false
      },
      // {
      //   title: '普通彩设置',
      //   name: 'game-gpc',
      //   path: 'game-gpc/:id',
      //   inmenu: false
      // },
      // {
      //   title: '普通彩设置',
      //   name: 'game-lhc',
      //   path: 'game-lhc/:id',
      //   inmenu: false
      // },
      {
        title: '群聊管理',
        name: 'chat',
        pcode: 'setting.chat'
      },
      {
        title: '聊天室设置',
        name: 'chatroom-setting',
        path: 'chatroom-setting/:id',
        inmenu: false
      },
      {
        title: '聊天室详情',
        name: 'chatroom-users',
        path: 'chatroom-users/:id',
        inmenu: false
      },
      {
        title: '聊天违禁词',
        name: 'chat-forbid',
        inmenu: false
      },
      {
        title: '域名设置',
        name: 'domain',
        pcode: 'setting.domain'
      },
      {
        title: '版面设置',
        name: 'layout',
        pcode: 'setting.theme'
      },
      {
        title: '网站设置',
        name: 'website',
        pcode: 'setting.configuration'
      },
      {
        title: '注册页面配置',
        name: 'register',
        pcode: 'setting.registerConfig'
      },
      {
        title: 'IP管理',
        name: 'ip',
        pcode: 'setting.ipManage'
      }
    ]
  },
  {
    title: '运营',
    name: 'operations',
    children: [
      {
        title: '运营活动',
        name: 'activity',
        pcode: 'setting.noticeActivity'
      },
      {
        title: '活动编辑',
        name: 'activity-editor',
        path: 'activity-editor/:id',
        pcode: 'setting.noticeActivity',
        inmenu: false
      },
      {
        title: '幸运大转盘编辑',
        name: 'turntable-editor',
        path: 'turntable-editor/:id',
        pcode: 'setting.noticeActivity',
        inmenu: false
      },
      {
        title: '公告发布',
        name: 'notice',
        pcode: 'setting.noticeActivity'
      },
      {
        title: '公告发布编辑',
        name: 'notice-editor',
        path: 'notice-editor/:id',
        pcode: 'setting.noticeActivity',
        inmenu: false
      },
      {
        title: '新闻管理',
        name: 'news',
        pcode: 'setting.news'
      },
      {
        title: '新闻发布编辑',
        name: 'news-editor',
        path: 'news-editor/:id',
        pcode: 'setting.news',
        inmenu: false
      }
    ]
  },
  {
    title: '日志',
    name: 'log',
    children: [
      {
        title: '登录日志',
        name: 'login'
      },
      {
        title: '操作日志',
        name: 'action'
      }
    ]
  },
  {
    title: '个人中心',
    name: 'my',
    inmenu: false,
    children: [
      {
        title: '我的账号',
        name: 'profile',
        pcode: 'my.profile'
      }
    ]
  }
]
