// please see the readme
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    defender.move(-1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    Bullet = game.createSprite(defender.get(LedSpriteProperty.X), defender.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        Bullet.change(LedSpriteProperty.Y, -1)
        if (Bullet.isTouching(invader)) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            invader.delete()
            game.addScore(1)
        }
        
        if (Bullet.isTouchingEdge()) {
            Bullet.delete()
        }
        
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    defender.move(1)
})
let BLL : game.LedSprite = null
let Bullet : game.LedSprite = null
let invader : game.LedSprite = null
let defender : game.LedSprite = null
game.setScore(0)
defender = game.createSprite(2, 4)
invader = game.createSprite(randint(0, 4), 0)
basic.forever(function on_forever() {
    
    if (invader.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
    
    if (invader.isDeleted()) {
        basic.pause(100)
        invader = game.createSprite(randint(0, 4), 0)
        basic.pause(100)
        BLL = game.createSprite(invader.get(LedSpriteProperty.X), invader.get(LedSpriteProperty.Y))
        for (let index2 = 0; index2 < 4; index2++) {
            basic.pause(500)
            BLL.change(LedSpriteProperty.Y, 1)
            if (BLL.isTouching(defender)) {
                game.gameOver()
            } else if (BLL.isTouchingEdge()) {
                BLL.delete()
            }
            
        }
    }
    
})
basic.forever(function on_forever2() {
    basic.pause(2000)
    invader.change(LedSpriteProperty.Y, 1)
})
basic.forever(function on_forever3() {
    if (game.score() == 10) {
        basic.showString("You Win")
        game.pause()
    }
    
})
