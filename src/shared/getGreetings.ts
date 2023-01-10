// TODO 修改一下问候文案
export const getGreetings = (): string => {
  const hour: number = new Date().getHours()

  return hour < 5
    ? `夜深了...`
    : hour < 8
    ? `早上好!`
    : hour <= 11
    ? `上午好!`
    : hour <= 13
    ? `中午好!`
    : hour < 18
    ? `下午好!`
    : '晚上好!'
}
