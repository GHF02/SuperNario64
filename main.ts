scene.setBackgroundImage(assets.image`Background`)
let Joueur1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
let Joueur2 = sprites.create(assets.image`Player2`, SpriteKind.Player)
Joueur1.setBounceOnWall(true)
Joueur2.setBounceOnWall(true)
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Right)) {
        Joueur1.x += -3
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        Joueur1.x += 3
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        Joueur2.x += -3
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        Joueur2.x += 3
    }
})
