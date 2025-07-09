var game = new Phaser.Game(480, 360, Phaser.CANVAS, '', { preload: preload, create: create, update: update },false, false);

function preload() {

    game.load.image('sky', '//res.cloudinary.com/mickfuzz/image/upload/v1512125124/phasertut/sky.png');
    game.load.image('ground', '//res.cloudinary.com/mickfuzz/image/upload/v1512125124/phasertut/platform.png');
    game.load.image('star', '//res.cloudinary.com/mickfuzz/image/upload/v1512125124/phasertut/star.png');
  
  game.load.image('saw', 'https://github.com/glitch-game-club/ggcp/blob/main/honey-smash/glitch-assets/fire2.png?raw=true');
  
    game.load.spritesheet('dude', '//res.cloudinary.com/mickfuzz/image/upload/v1512125124/phasertut/dude.png', 32, 48);

}

var player;
var platforms;
var cursors;
var star;


function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
  
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;


    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create a ledge
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;


    // The player and its settings
    player = game.add.sprite(32, game.world.height - 250, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;


    //  Finally some stars to collect


  saw = game.add.sprite(300,game.world.height - 150,'saw');

   game.physics.arcade.enable(saw);
  saw.enableBody = true;
//  saw.body.immovable = true;

      stars = game.add.group();
    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

        var star = stars.create(170, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;


    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    
}

function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
  
      game.physics.arcade.overlap(player, saw, killPlayer, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

    }
    else
    {
        //  Stand still
        player.animations.stop();

    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}

function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

}

function killPlayer (player, saw) {
    
    // Removes the star from the screen
    player.kill();

}