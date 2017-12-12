.. mdocs documentation master file, created by
   sphinx-quickstart on Mon Dec 11 17:19:48 2017.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Codey's python API
------------------

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

    codey.face('00001020402012020212204020100000', 1)
    codey.show('hello')
    codey.clear()
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


陀螺仪
***********


红外接收器
***********


按钮
***********


齿轮电位器
***********


光线传感器
***********