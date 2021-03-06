export default {
  title: 'Gas3IotYun',
  logo: 'Gas3IotYun',
  indexTitle: 'Gas3IotYun代物联网云平台',
  whiteList: ['/login', '/404', '/401', '/lock'], // 配置无权限可以访问的页面
  whiteTagList: ['/login', '/404', '/401', '/lock' ], // 配置不添加tags页面 （'/advanced-router/mutative-detail/*'——*为通配符）
  lockPage: '/lock',
  tokenTime: 6000,
  info: {
    title: 'Gas3IotYun代物联网云平台',
    list: [
      '基于Spring Cloud、OAuth2.0开发基于Vue前后分离的开发平台。',
      '基于Avue2 开发无需前端知识',
      '技术支持  Luozhenqing',
      '当前版本：v3.0.0'
    ]
  },
  // http的status默认放行不才用统一处理的,
  // 配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: '首页',
    value: '/wel/index',
    params: {},
    query: {},
    group: [],
    close: false
  },
  // 配置菜单的属性
  menu: {
    props: {
      label: 'label',
      path: 'path',
      icon: 'icon',
      children: 'children'
    }
  }
}
