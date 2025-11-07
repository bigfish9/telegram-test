function Logo() {
  base(this, LSprite, [])
  this.init()
}
Logo.prototype.init = function () {
  var self = this

  var bgKey = getResourceName('start_bg')
  var backgroundBitmapData = new LBitmapData(dataList[bgKey], 0, 0, 640, 960)
  var backgroundBitmap = new LBitmap(backgroundBitmapData)
  self.addChild(backgroundBitmap)

  var logoBitmapData = new LBitmapData(dataList['logo'], 0, 0, 640, 960)
  var logoBitmap = new LBitmap(logoBitmapData)
  logoBitmap.x = LGlobal.width / 2 - logoBitmap.width / 2
  logoBitmap.y = LGlobal.height * 0.87
  self.addChild(logoBitmap)
  // Util.sFloat(logoBitmap, 0.7);

  self.startBtn = new LSprite()
  var startBtnKey = getResourceName('start_btn')
  var startBtnBitmapData = new LBitmapData(dataList[startBtnKey])
  var startBtnBitmap = new LBitmap(startBtnBitmapData)
  self.startBtn.addChild(startBtnBitmap)
  self.startBtn.x = LGlobal.width / 2 - startBtnBitmap.width / 2
  self.startBtn.y = LGlobal.height * 0.62
  self.addChild(self.startBtn)
  Util.sFloat(self.startBtn, 0.7)

  self.alpha = 0
  Util.fadeIn(self, 1)

  self.startBtn.addEventListener(LMouseEvent.MOUSE_DOWN, self.onStartBtnDown)
}
Logo.prototype.onStartBtnDown = function () {
  if (!mySoundPlayer.backgroundIsLoad) {
    mySoundPlayer.onremoved()
    removeChild(mySoundPlayer)
    mySoundPlayer = new SoundPlayer()
    addChild(mySoundPlayer)
  }
  gameStart()
}
Logo.prototype.onmousedown = function (event) {
  var self = event.target
  var hook = self.getChildByName('hook')
  hook.shoot()
}
