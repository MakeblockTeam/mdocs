# Codey

**Function**

when codey starts up

    import codey

when receive（message）

    def callback():
        pass
    codey.on_message(msgstr, callback)

broadcast 'hello'

    codey.message('hello')

**Example1**

    import codey

    codey.show('hello world')

**Example2**

    import codey

    def on_start_callback():
        codey.message('hello')

    codey.on_start(on_start_callback)

    def on_message_callback():
        codey.show('hello world')

    codey.on_message('hello', on_message_callback)


# Rocky

rocky is the chassis，containing two wheels, an IR emitter, an IR receiver, a RGB color sensor, a light sensor and a white light emitter

**Function**

move forward at power 50 for 1 sec

    rocky.forward(50, 1)

move backward at power 50 for 1 sec

    rocky.backward(50, 1)

turn left at power 50 for 1 sec

    rocky.left(50, 1)

turn right at power 50 for 1 sec

    rocky.right(50, 1)


**Example**

```
    import rocky

    rocky.forward(50, 1)
    rocky.back(50, 1)
    rocky.left(50, 1)
    rocky.right(50, 1)
```


# Face Panel

The face panel is a  8*16 led matrix。Each of the led lights is controlled by api.
**Function**

show image【^_^】for（1）sec

```
    codey.face(
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0'
        '0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 0'
        '0 0 1 0 0 0 1 0 0 1 0 0 0 1 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0', 1)
```

show image【^_^】

```
    codey.face(
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0'
        '0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 0'
        '0 0 1 0 0 0 1 0 0 1 0 0 0 1 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0')
```

show image【^_^】at x [0], y[0]

```
    codey.face_at(
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0'
        '0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 0'
        '0 0 1 0 0 0 1 0 0 1 0 0 0 1 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0', 0, 0)
```

show "hello world"

    codey.show('hello world')

clear the screen

    codey.clear()

light up x:(0) y:(0)

    codey.pixel(x, y)

light off x:(0) y:(0)

    codey.pixel_off(0,0)

**Example**

![face-panel](./images/face-panel-demo.png)

```
    import codey


    codey.face(
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
        '0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0'
        '0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0'
        '0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0'
        '0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0'
        '0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0'
        '0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0'
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0', 1)
    codey.show('hello')
    codey.clear()
    codey.pixel(3, 3)
```

# RGB LED

In the rocky, there is a rgb led light，which supports to set different colors.

**Function**

LED lights up【red】，for（1）sec

    codey.color('#334455', 1)

LED lights up【red】

    codey.color('#334455')

 LED lights off

    codey.color('#000')

set RGB LED value to red（255）green（0）blue（0）

    codey.rgb(255, 0, 0)

**Example**

    import codey

    codey.color('#ff0000', 1)
    codey.color('#00ff15', 1)
    codey.color('#0021ff', 1)


# Loud Speaker


**Function**

sound parameters available to select：

- `hello.wav` : hello
- `hi.wav` :hi
- `bye.wav` : bye
- `yeah.wav` : yeah
- `wow.wav` : wow
- `laugh.wav` : laugh
- `hum.wav` : hum
- `sad.wav` : sad
- `sigh.wav` : sigh
- `annoyed.wav` : annoyed
- `angry.wav` : angry
- `surprised.wav` :  scared
- `yummy.wav` :  pettish
- `curious.wav` : curious
- `embarrassed.wav` : embarrassed
- `ready.wav` : ready
- `sprint.wav` :  sprint
- `sleepy.wav` :  snore
- `meow.wav` :  meow
- `start.wav` :  start
- `switch.wav` :  switch
- `beeps.wav` :  beeps
- `buzzing.wav` :  buzz
- `exhaust.wav` :  air-out
- `explosion.wav` :  explosion
- `gotcha.wav` :  gotcha
- `hurt.wav` :  painful
- `jump.wav` :  jump
- `laser.wav` :  laser
- `level up.wav` :  level-up
- `low energy.wav` :  low-energy
- `metal clash.wav` :  metal-clash
- `prompt tone.wav` :  prompt-tone
- `right.wav` :  right
- `wrong.wav` : wrong
- `ring.wav` :  ringtone
- `score.wav` :  score
- `shot.wav` :  shot
- `step_1.wav` :  step_1
- `step_2.wav` : step_2
- `wake.wav` :  activate
- `warning.wav` :  warning


play sound【hello】. The sound can be interrupted.
    codey.say('hello.wav')

play sound【hello】until done. The sound won't be interrupted.

    codey.say('hello.wav', True)

stop the sound

    codey.mute()

play note（60）for（0.25）beat。参照表待定。

    codey.play(435, 500)

stop（0.25）beat

    todo

play sound at frequency of  (700) HZ for (1) sec

    todo

change volume by（-10）

    codey.change_volume(-10)

set volume to（100）

    codey.set_volume(100)

volume

    codey.get_volume()


**Example**

    import codey

    codey.set_volume(100)
    codey.say('hello.wav', True)
    codey.say('hi.wav', True)


# Gyroscope


**Function**

when codey is shaking

    def callback():
        pass
    codey.on_shake(callback)

when codey is【forward，backward，leftward，rightward】tilted。The first parameter available to select is：``forward``，``backward``，``left``，``right``。

    def callback():
        pass
    codey.on_tilt('forward',callback)


**Example**

    import codey

    def on_shake_callback():
        codey.color('#ff0000')

    codey.on_shake(on_shake_callback)


# IR reception emitter
***

**Function**

**Example>


# Button


codey has three buttons, ``A``, ``B``, ``C``。

**Function**

when button【A, B, C】is pressed

    def callback():
        pass
    codey.on_button('A', callback)

The first parameter can be：``A``，``B``，``C``。


**Example**

    import codey

    def on_button_callback():
        codey.color('#ff0000')

    codey.on_button('A', on_button_callback)


# Gear Potentiometer


**Function**

**Example**


# Light Sensor


**Function**

when light intensity ＜（10）

    def callback():
        pass

    codey.on_light_under(50, callback)


**Example**

    import codey

    def on_light_under_callback():
        codey.color('#ff0000')

    codey.on_light_under(10, on_light_under_callback)


# Sound Sensor


**Function**

when【loudness】＞（10）

    def callback():
        pass

    codey.on_sound_over(10, callback)


**Example**

    import codey

    def on_sound_over_callback():
        codey.color('#ff0000')

    codey.on_sound_over(10, on_sound_over_callback)


# General Syntax-Control
****

**Function**

wait for 1 sec

    import time
    time.sleep(1)

repeat for 10 times

    for count in range(10):
        pass

forever

    while True:
        pass

if...then

    if False:
        pass

 if...then..else

    if False:
        pass

    else:
        pass

wait until

    while not False:
        pass

repeat until

    while not False:
        pass

#  General Syntax-Operators
****

**Function**

1 + 1

    1 + 1

1 - 1

    1 - 1

1 * 1

    1 * 1

1 / 1

    1 / 1

pick random 1 to 10

    import random
    random.randint(1, 10)

1 < 2

    1 < 2

1 == 1

    1 == 1

2 < 1

    2 < 1

and

    False and False

or

    False or False

not

    not True

connect ``hello`` and ``world``

    str('hello') + str('world')

the 1 string of ``word``

    'world'[0]

length of ``word``

    len('world')

 ``hello`` contains ``world``？

    str('hello').find(str('world')) > -1

1 mod 3

    1 % 3

round ``3.4``

    round(3.4)

abs``-1``

    import math
    math.fabs(-1)

ceiling ``3.4``

    import math
    math.ceil(3.4)

sqrt``4``

    import math
    math.sqrt(4)

 sin``2``

    import math
    math.sin(2 / 180.0 * math.pi)

cos``2``

    import math
    math.cos(2 / 180.0 * math.pi)

tan``2``

    import math
    math.tan(2 / 180.0 * math.pi)

asin``2``

    import math
    math.asin(2) / math.pi * 180

acos``2``

    import math
    math.acos(2) / math.pi * 180

atan``2``

    import math
    math.atan(2) / math.pi * 180

``ln2``

    import math
    math.log(2)

``log2``

    import math
    math.log10(2)

``e^2``

    import math
    math.exp(2)

``10^2``

    import math
    math.pow(10,2)
