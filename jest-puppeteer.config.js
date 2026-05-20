module.exports = {
  launch: {
    headless: 'new',
    slowMo: 25,
    args: [
      '--disable-gpu',
      '--disable-gpu-sandbox',
      '--disable-gpu-compositing',
      '--disable-software-rasterizer',
      '--disable-dev-shm-usage',
      '--disable-features=VizDisplayCompositor',
      '--single-process',
      '--no-zygote'
    ]
  }
}
