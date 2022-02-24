#please see the readme
def on_button_pressed_a():
    defender.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Bullet
    Bullet = game.create_sprite(defender.get(LedSpriteProperty.X),
        defender.get(LedSpriteProperty.Y))
    for index in range(4):
        basic.pause(100)
        Bullet.change(LedSpriteProperty.Y, -1)
        if Bullet.is_touching(invader):
            music.play_tone(262, music.beat(BeatFraction.WHOLE))
            invader.delete()
            game.add_score(1)
        if Bullet.is_touching_edge():
            Bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    defender.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

BLL: game.LedSprite = None
Bullet: game.LedSprite = None
invader: game.LedSprite = None
defender: game.LedSprite = None
game.set_score(0)
defender = game.create_sprite(2, 4)
invader = game.create_sprite(randint(0, 4), 0)

def on_forever():
    global invader, BLL
    if invader.get(LedSpriteProperty.Y) == 4:
        game.game_over()
    if invader.is_deleted():
        basic.pause(100)
        invader = game.create_sprite(randint(0, 4), 0)
        basic.pause(100)
        BLL = game.create_sprite(invader.get(LedSpriteProperty.X),
            invader.get(LedSpriteProperty.Y))
        for index2 in range(4):
            basic.pause(500)
            BLL.change(LedSpriteProperty.Y, 1)
            if BLL.is_touching(defender):
                game.game_over()
            elif BLL.is_touching_edge():
                BLL.delete()
basic.forever(on_forever)

def on_forever2():
    basic.pause(2000)
    invader.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever2)

def on_forever3():
    if game.score() == 10:
        basic.show_string("You Win")
        game.pause()
basic.forever(on_forever3)
