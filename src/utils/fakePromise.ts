


export const fakePromise = (time: number) => {
  return new Promise((res) => {
    setTimeout(() => res(true), time)
  })
}
