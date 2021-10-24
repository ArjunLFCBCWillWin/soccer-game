var ball, background_img, player_1, player_2, player_3, player_4, player_5, scoreboard
var ball_img, player_1_img, player_2_img, player_3_img, player_4_img, player_5_img, scoreboard_img
var bg, sb, score = 0
var player1Active = false, player2Active = false, player3Active = false, player4Active = false, player5Active = false

function preload() {
    background_img = loadImage("./assets/bg.jpeg")
    ball_img = loadImage("./assets/ball.png")
    scoreboard_img = loadImage("./assets/sb.png")
    player_1_img = loadImage("./assets/p1.png")
    player_2_img = loadImage("./assets/p2.png")
    player_3_img = loadImage("./assets/p3.png")
    player_4_img = loadImage("./assets/p4.png")
    player_5_img = loadImage("./assets/p5.png")
}

function setup() {
    createCanvas(1200, 500)
    
    
    bg = createSprite(width / 2, height / 2)
    bg.addImage(background_img)
    bg.scale = 0.15

    ball = createSprite(width / 2, height / 2-50)
    ball.addImage(ball_img)
    ball.scale = 0.15

    scoreboard = createSprite(width / 2, 50, 30, 50)
    scoreboard.addImage(scoreboard_img)
    scoreboard.scale = 0.35

    player_1 = createSprite(width / 2 - 50, height / 2, 30, 50)
    player_1.addImage(player_1_img)
    player_1.scale = 0.15

    player_2 = createSprite(width / 2 - 50, height / 2 - 100, 30, 50)
    player_2.addImage(player_2_img)
    player_2.scale = 0.15

    player_3 = createSprite(width / 2 - 180, height / 2 - 70, 30, 50)
    player_3.addImage(player_3_img)
    player_3.scale = 0.2

    player_4 = createSprite(width / 2 - 320, height / 2, 30, 50)
    player_4.addImage(player_4_img)
    player_4.scale = 0.2

    player_5 = createSprite(width / 2 - 320, height / 2 - 110, 30, 50)
    player_5.addImage(player_5_img)
    player_5.scale = 0.15

}

function draw() {
    background(0)
    console.log(player1Active)
    if(ball.velocityX>=2){
    ball.velocityX=ball.velocityX-0.04    
    }
    

    if (player1Active === true) {
        if (keyIsDown(UP_ARROW)) {
            player_1.y = player_1.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player_1.y = player_1.y + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player_1.x = player_1.x - 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player_1.x = player_1.x + 10
        }
        
        if(player_1.collide(ball)){
        ball.velocityX=2
        


        }

    }

    if (player2Active === true) {
        if (keyIsDown(UP_ARROW)) {
            player_2.y = player_2.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player_2.y = player_2.y + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player_2.x = player_2.x - 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player_2.x = player_2.x + 10
        }

    }


    if (player3Active === true) {
        if (keyIsDown(UP_ARROW)) {
            player_3.y = player_3.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player_3.y = player_3.y + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player_3.x = player_3.x - 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player_3.x = player_3.x + 10
        }

    }

    if (player4Active === true) {
        if (keyIsDown(UP_ARROW)) {
            player_4.y = player_4.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player_4.y = player_4.y + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player_4.x = player_4.x - 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player_4.x = player_4.x + 10
        }

    }

    if (player5Active === true) {
        if (keyIsDown(UP_ARROW)) {
            player_5.y = player_5.y - 10
        }
        if (keyIsDown(DOWN_ARROW)) {
            player_5.y = player_5.y + 10
        }
        if (keyIsDown(LEFT_ARROW)) {
            player_5.x = player_5.x - 10
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player_5.x = player_5.x + 10
        }

    }

    drawSprites()
}

function keyPressed() {
    if (keyCode === 49) {
        player1Active = true
        player2Active = false
        player3Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 50) {
        player2Active = true
        player1Active = false
        player3Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 51) {
        player3Active = true
        player1Active = false
        player2Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 52) {
        player4Active = true
        player1Active = false
        player2Active = false
        player3Active = false
        player5Active = false
    }
    if (keyCode === 53) {
        player5Active = true
        player1Active = false
        player2Active = false
        player3Active = false
        player4Active = false
    }

}