export const appendScript = (url: string) => {
  const script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

export const appendCss = (url: string) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.body.appendChild(link)
}