

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
        this.x = (this.speed * dt) + this.x;
        this.x += (150 * dt);
    } else {
        this.x = -90;
    }

    // If the enemy and the player collide
    if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
        player.restart();
    }
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function(x, y) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 300;
};

// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {

    // When player reaches the water
    if (player.y < 20) {
        alert('You won the game!');
        this.restart();
    }
};

Player.prototype.handleInput = function(movement) {
    if (movement == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if (movement == 'right' && this.x < 400) {
        this.x += 50;
    }
    if (movement == 'up' && this.y > 3) {
        this.y -= 50;
    }
    if (movement == 'down' && this.y < 400) {
        this.y += 50;
    }
};

//Place player on the bottom row

Player.prototype.restart = function() {
    this.x = 200;
    this.y = 300;
};

// Now instantiate your objects.

const enemy1 = new Enemy(-80, 60, 10);
const enemy2 = new Enemy(-150, 145, 40);
const enemy3 = new Enemy(-250, 225, 80);
const enemy4 = new Enemy(-350, 60, 60);
const enemy5 = new Enemy(-450, 145, 90);
const enemy6 = new Enemy(-550, 225, 100);

// Place all enemy objects in an array called allEnemies

let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Place the player object in a variable called player

const player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
