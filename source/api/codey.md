.. mdocs documentation master file, created by
   sphinx-quickstart on Mon Dec 11 17:19:48 2017.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Codey's python API
------------------

小程
*******

函数
=========

当接收到（message）

.. code::

    def callback():
        pass
    codey.on_message(msgstr, callback)

广播 'hello'

.. code::

    codey.message('hello')

示例
=======

.. code::

    import codey

    def on_message_callback():
        codey.color('#ff0000')

    codey.on_message('hello', on_message_callback)


小奔
***********
小奔是底盘，带有两个轮子和光线传感器。


函数
=========

以 50 的动力前进，持续 1 秒

.. code::

    rocky.forward(50, 1)

以 50 的动力后退，持续 1 秒

.. code::

    rocky.backward(50, 1)

以 50 的动力左转，持续 1 秒

.. code::

    rocky.left(50, 1)

以 50 的动力右转，持续 1 秒

.. code::

    rocky.right(50, 1)


示例
=======

.. code::

    import rocky

    rocky.forward(50, 1)
    rocky.back(50, 1)
    rocky.left(50, 1)
    rocky.right(50, 1)



表情面板
***********
表情面板是一个 8*16 的 led 矩阵。每一个 led 灯都可以通过 api 来控制

函数
=========

显示图案【^_^】持续（1）秒

.. code::

    codey.face('00001020402012020212204020100000', 1)

显示图案【^_^】

.. code::

    codey.face('00001020402012020212204020100000')

显示 "hello world"

.. code::

    codey.show('hello world')

熄灭屏幕

.. code::

    codey.clear()

点亮x:(0) y:(0)

.. code::

    codey.pixel(x, y)

熄灭x:(0) y:(0)

.. code::

    codey.pixel_off(0,0)

示例
=======

.. image:: ./images/face-panel.png

.. code::

    import codey
    import time

    codey.face('00001020402012020212204020100000', 1)
    codey.show('hello')
    time.sleep(1)
    codey.clear()
    time.sleep(1)
    codey.pixel(3, 3)

RGB LED 灯
***********
在小奔的中间有一个 rgb led 灯，支持设置不同的颜色

函数
=========

LED 亮起【红】，持续（1）秒

.. code::

    codey.color('#334455', 1)

LED 亮起【红】

.. code::

    codey.color('#334455')

熄灭 LED

.. code::

    codey.color('#000')

设置LED的RGB值为红（255）绿（0）蓝 （0）

.. code::

    codey.rgb(255, 0, 0)

示例
=======

.. code::

    import codey

    codey.color('#ff0000', 1)
    codey.color('#00ff15', 1)
    codey.color('#0021ff', 1)


扬声器
***********

函数
=========

播放声音【猫叫】。该次播放可被打断。

可选的参数如下：

- ``cat.wav``  猫叫
- ``dog.wav``  狗叫
- ``happy.wav``  欢快
- ``hurt.wav``  痛苦
- ``sad.wav``  悲伤
- ``switch.wav``  开关
- ``start.wav``  启动
- ``wake.wav``  激活
- ``prompt_tone.wav``  步骤
- ``wrong.wav``  步骤2
- ``score.wav``  提示
- ``rignt.wav``  正确
- ``fire_alarm.wav``  错误
- ``beeps.wav``  得分
- ``buzzing.wav``  死亡
- ``clang.wav``  死亡2
- ``gunshot.wav``  哔哔
- ``death.wav``  蜂鸣
- ``death2.wav``  叮当
- ``exhaust.wav``  排气
- ``explosion.wav``  爆炸
- ``hit.wav``  火灾警报
- ``jump.wav``  射击
- ``laser.wav``  敲击
- ``radar.wav``  跳动
- ``ringing.wav``  激光
- ``shine.wav``  雷达
- ``step.wav``  振铃
- ``step2.wav``  发光

.. code::

    codey.say('cat.wav')

播放声音【猫】直到结束。该次播放，不会被打断

.. code::

    codey.say('cat.wav', True)

停止声音

.. code::

    codey.mute()

播放音符（60）以（0.25）拍。参照表待定。

.. code::

    codey.play(435, 500)

停止（0.25）拍

.. code::

    todo

播放声音以频率 (700) 赫兹持续 (1) 秒

.. code::

    todo

调整音量（-10）

.. code::

    codey.change_volume(-10)

将音量设定为（100）

.. code::

    codey.set_volume(100)

音量

.. code::

    codey.get_volume()


示例
=======

.. code::

    import codey

    codey.set_volume(100)
    codey.say('cat.wav', True)
    codey.say('hurt.wav', True)


陀螺仪
***********

函数
=========

当小程摇晃

.. code::

    def callback():
        pass
    codey.on_shake(callback)

当小程【向前，向后，向左，向右】倾斜。第一个参数可选项为：``forward``，``backward``，``left``，``right``。

.. code::

    def callback():
        pass
    codey.on_tilt('forward',callback)


示例
=======

.. code::

    import codey

    def on_shake_callback():
        codey.color('#ff0000')

    codey.on_shake(on_shake_callback)


红外接收发射器
**************

函数
=========

示例
=======


按钮
***********

小程有三个按钮，分别为 ``A``, ``B``, ``C``。

函数
=========

当按下按钮【A, B, C】

.. code::

    def callback():
        pass
    codey.on_button('A', callback)

第一个参数可以为：``A``，``B``，``C``。


示例
=======

.. code::

    import codey

    def on_button_callback():
        codey.color('#ff0000')

    codey.on_button('A', on_button_callback)


齿轮电位器
***********

函数
=========

示例
=======


光线传感器
***********

函数
=========

当光线强度＜（10）

.. code::

    def callback():
        pass

    codey.on_light_under(50, callback)


示例
=======

.. code::

    import codey

    def on_light_under_callback():
        codey.color('#ff0000')

    codey.on_light_under(10, on_light_under_callback)


声音传感器
***********

函数
=========

当【响度】＞（10）

.. code::

    def callback():
        pass

    codey.on_sound_over(10, callback)


示例
=======

.. code::

    import codey

    def on_sound_over_callback():
        codey.color('#ff0000')

    codey.on_sound_over(10, on_sound_over_callback)


通用语法-控制
***************

函数
=========

等待 1 秒

.. code::

    import time
    time.sleep(1)

重复 10 次

.. code::

    for count in range(10):
        pass

重复执行

.. code::

    while True:
        pass

如果，那么

.. code::

    if False:
        pass

如果，那么，否则

.. code::

    if False:
        pass

    else:
        pass

等待直到

.. code::

    while not False:
        pass

重复执行，直到

.. code::

    while not False:
        pass

通用语法-运算
***************

函数
=========

1 加 1

.. code::

    1 + 1

1 减 1

.. code::

    1 - 1

1 乘 1

.. code::

    1 * 1

1 除以 1

.. code::

    1 / 1

在 1 到 10 之间随机取一个数

.. code::

    import random
    random.randint(1, 10)

1 小于 2

.. code::

    1 < 2

1 等于 1

.. code::

    1 == 1

2 大于 1

.. code::

    2 < 1

与

.. code::

    False and False

或

.. code::

    False or False

非

.. code::

    not True

连接字符串 ``hello`` 与 ``world``

.. code::

    str('hello') + str('world')

字符串 ``word`` 中的第一个字符

.. code::

    'world'[0]

字符串 ``word`` 的长度

.. code::

    len('world')

字符串 ``hello`` 是否包含字符串 ``world``？

.. code::

    str('hello').find(str('world')) > -1

1 除以 3 的余数

.. code::

    1 % 3

将 ``3.4`` 四舍五入

.. code::

    round(3.4)

``-1`` 的绝对值

.. code::

    import math
    math.fabs(-1)

将 ``3.4`` 向上取整

.. code::

    import math
    math.ceil(3.4)

``4`` 平方根

.. code::

    import math
    math.sqrt(4)

``2`` 的正弦

.. code::

    import math
    math.sin(2 / 180.0 * math.pi)

``2`` 的余弦

.. code::

    import math
    math.cos(2 / 180.0 * math.pi)

``2`` 的正切

.. code::

    import math
    math.tan(2 / 180.0 * math.pi)

``2`` 的反正弦

.. code::

    import math
    math.asin(2) / math.pi * 180

``2`` 的反余弦

.. code::

    import math
    math.acos(2) / math.pi * 180

``2`` 的反正切

.. code::

    import math
    math.atan(2) / math.pi * 180

``ln2``

.. code::

    import math
    math.log(2)

``log2``

.. code::

    import math
    math.log10(2)

``e^2``

.. code::

    import math
    math.exp(2)

``10^2``

.. code::

    import math
    math.pow(10,2)
