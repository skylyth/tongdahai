import dateOptions from './date-options'

// 配置文件
export default {
  MESSGE_TOP: 100,
  // 提示消息显示时间
  MESSAGE_DURATION: 3,
  // 常用操作的最大显示数量
  MAX_COMMON_NAVS: 10,
  // 定时任务运行周期。单位ms
  TASK_INTERVAL: 10000,
  // 默认分页大小
  PAGE_SIZE: 50,
  // 默认分页大小选项
  PAGE_SIZE_OPTIONS: [50, 100, 200, 500],
  // 日期设置
  dateRangeOptions: {
    // 禁用掉今天以后的日期
    disabledDate: date => {
      return date.getTime() > new Date().getTime()
    },
    shortcuts: dateOptions.shortcuts
  }
}
