import moment from 'moment'

const getMonth = (i) => {
  return (moment().subtract(i, 'month').month() + 1) + '月'
}

export default {
  shortcuts: [
    {
      text: '今天',
      value () {
        return [
          moment().toDate(),
          moment().toDate()
        ]
      }
    },
    {
      text: '昨天',
      value () {
        return [
          moment().subtract(1, 'days').toDate(),
          moment().subtract(1, 'days').toDate()
        ]
      }
    },
    {
      text: '本周',
      value () {
        return [
          moment().isoWeekday(1).toDate(),
          moment().toDate()
        ]
      }
    },
    {
      text: '本月',
      value () {
        return [
          moment().date(1).toDate(),
          moment().toDate()
        ]
      }
    },
    {
      text: '上月',
      value () {
        return [
          moment().date(1).subtract(1, 'month').toDate(),
          moment().date(1).subtract(1, 'days').toDate()
        ]
      }
    },
    {
      text: getMonth(2),
      value () {
        return [
          moment().date(1).subtract(2, 'month').toDate(),
          moment().date(1).subtract(1, 'month').subtract(1, 'days').toDate()
        ]
      }
    },
    {
      text: getMonth(3),
      value () {
        return [
          moment().date(1).subtract(3, 'month').toDate(),
          moment().date(1).subtract(2, 'month').subtract(1, 'days').toDate()
        ]
      }
    },
    {
      text: getMonth(4),
      value () {
        return [
          moment().date(1).subtract(4, 'month').toDate(),
          moment().date(1).subtract(3, 'month').subtract(1, 'days').toDate()
        ]
      }
    },
    {
      text: getMonth(5),
      value () {
        return [
          moment().date(1).subtract(5, 'month').toDate(),
          moment().date(1).subtract(4, 'month').subtract(1, 'days').toDate()
        ]
      }
    }
  ]
}
