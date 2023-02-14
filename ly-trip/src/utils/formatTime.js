import dayjs from 'dayjs'

export function formatTime(strTime){
  return dayjs(strTime).format('YYYY-MM-DD')
}

export function getDiffDays(startDate,endDate){
  return dayjs(endDate).diff(startDate,'day')
}