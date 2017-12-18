Scratch spirte's python API
---------------------------

spirte
***********
舞台上的角色

Motion
=========

让精灵移动10步

.. code::

    sprite.move(10)

让精灵右转90度

.. code::

    sprite.turnRight(90)

让精灵左转90度 

.. code::

    sprite.turnLeft(90)

让精灵指向180度

.. code::

    sprite.direction(180)

让精灵指向鼠标或者其他精灵

.. code::

    sprite.pointTowards('_mouse_')
    
让精灵移动到坐标x100,y100

.. code::

    sprite.gotoXY(100, 100)

在5s内让精灵滑行到100,100

.. code::

    sprite.glideXY(100,100,sec=5)

改变X坐标

.. code::

    sprite.changeX(10)

设置X坐标

.. code::

    sprite.setX(10)

改变Y坐标

.. code::

    sprite.changeY(10)

设置Y坐标

.. code::

    sprite.setY(10)

设置碰到边缘就反弹

.. code::

    sprite.setBounce()
    
设置精灵旋转模式

.. code::

    sprite.setRotationStyle('left-right')

返回X坐标

.. code::

    sprite.xPosition()

返回Y坐标

.. code::

    sprite.yPosition()
    

Look
=========

让精灵说话

.. code::

    sprite.say("hello world")

显示精灵

.. code::

    sprite.show()

隐藏精灵 

.. code::

    sprite.hide()

改变精灵皮肤

.. code::

    sprite.switchCostume("custome1")

切换到下一个皮肤

.. code::

    sprite.nextCustome()
    
切换到下一个背景

.. code::

    sprite.nextBackground()

改变舞台背景

.. code::

    sprite.switchBackground("background")

改变精灵特效， 第一个参数是效果类型，第二个参数是改变的值

.. code::

    sprite.changeEffect("color",10)

设置精灵特效， 参数如上

.. code::

    sprite.setEffect("color",99)

清除特效

.. code::

    sprite.clearEffect()

改变精灵大小

.. code::

    sprite.changeSize(5)

设置精灵大小

.. code::

    sprite.setSize(50)
    
Sound
=========

播放声音，对应精灵所带的音效

.. code::

    sprite.play("meow")

停止所有声音

.. code::

    sprite.stopAll()

打鼓，第一个参数对应鼓的类型可以去对应图块查看，第二个参数是节拍长度

.. code::

    sprite.playDrum(1,0.25)

停止节拍

.. code::

    sprite.rest(0.5)

播放音符，第二个参数是节拍长度

.. code::

    sprite.playNote(60,0.5)
    
设置乐器类型

.. code::

    sprite.setInstrument(2)

改变声音特效

.. code::

    sprite.changeSoundEffect(1,10)

设置声音特效

.. code::

    sprite.setSoundEffect(1,10)

清除所有声音特效

.. code::

    sprite.clearSoundEffect()

改变音量

.. code::

    sprite.changeVolume(10)

设置音量

.. code::

    sprite.setVolume(100)

读取音量

.. code::

    sprite.volume()

改变节奏

.. code::

    sprite.changeTempo(20)

设置节奏

.. code::

    sprite.setTempo(60)

返回节奏

.. code::

    sprite.tempo()


Pen
=========

清除当前图像

.. code::

    sprite.clear()

用当前精灵印章

.. code::

    sprite.stamp()

落下画笔

.. code::

    sprite.penDown()

抬起画笔

.. code::

    sprite.penUp()

设置画笔颜色

.. code::

    sprite.setPenColor("#FF0000")
    
改变颜色HUE值

.. code::

    sprite.changePenColor(10)

改变画笔色度

.. code::

    sprite.changePenShade(10)

设置画笔色度

.. code::

    sprite.setPenShade(10)

改变画笔大小

.. code::

    sprite.changePenSize(1)

设置画笔大小

.. code::

    sprite.penSize(10)

