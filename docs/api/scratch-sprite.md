舞台上的角色

# Motion

让精灵移动10步

    sprite.move(10)

让精灵右转90度

    sprite.turnRight(90)

让精灵左转90度

    sprite.turnLeft(90)

让精灵指向180度

    sprite.direction(180)

让精灵指向鼠标或者其他精灵

    sprite.pointTowards('_mouse_')

让精灵移动到坐标x100,y100

    sprite.gotoXY(100, 100)

在5s内让精灵滑行到100,100

    sprite.glideXY(100,100,sec=5)

改变X坐标

    sprite.changeX(10)

设置X坐标

    sprite.setX(10)

改变Y坐标

    sprite.changeY(10)

设置Y坐标

    sprite.setY(10)

设置碰到边缘就反弹

    sprite.setBounce()

设置精灵旋转模式

    sprite.setRotationStyle('left-right')

返回X坐标

    sprite.xPosition()

返回Y坐标

    sprite.yPosition()


# Look

让精灵说话

    sprite.say("hello world")

显示精灵

    sprite.show()

隐藏精灵

    sprite.hide()

改变精灵皮肤

    sprite.switchCostume("custome1")

切换到下一个皮肤

    sprite.nextCustome()

切换到下一个背景

    sprite.nextBackground()

改变舞台背景

    sprite.switchBackground("background")

改变精灵特效， 第一个参数是效果类型，第二个参数是改变的值

    sprite.changeEffect("color",10)

设置精灵特效， 参数如上

    sprite.setEffect("color",99)

清除特效

    sprite.clearEffect()

改变精灵大小

    sprite.changeSize(5)

设置精灵大小

    sprite.setSize(50)

# Sound

播放声音，对应精灵所带的音效

    sprite.play("meow")

停止所有声音

    sprite.stopAll()

打鼓，第一个参数对应鼓的类型可以去对应图块查看，第二个参数是节拍长度

    sprite.playDrum(1,0.25)

停止节拍

    sprite.rest(0.5)

播放音符，第二个参数是节拍长度

    sprite.playNote(60,0.5)

设置乐器类型

    sprite.setInstrument(2)

改变声音特效

    sprite.changeSoundEffect(1,10)

设置声音特效

    sprite.setSoundEffect(1,10)

清除所有声音特效

    sprite.clearSoundEffect()

改变音量

    sprite.changeVolume(10)

设置音量

    sprite.setVolume(100)

读取音量

    sprite.volume()

改变节奏

    sprite.changeTempo(20)

设置节奏

    sprite.setTempo(60)

返回节奏

    sprite.tempo()


# Pen

清除当前图像

    sprite.clear()

用当前精灵印章

    sprite.stamp()

落下画笔

    sprite.penDown()

抬起画笔

    sprite.penUp()

设置画笔颜色

    sprite.setPenColor("#FF0000")

改变颜色HUE值

    sprite.changePenColor(10)

改变画笔色度

    sprite.changePenShade(10)

设置画笔色度

    sprite.setPenShade(10)

改变画笔大小

    sprite.changePenSize(1)

设置画笔大小

    sprite.penSize(10)

