
const gmTextItems = document.querySelectorAll('.zoom-inner-text');

const gmText_book = [
"https://glitch.com/~player-skidding",
"https://glitch.com/edit/#!/mechanic-carry-object-example?path=js/game.js",
"https://glitch.com/edit/#!/mechanic-throw-object?path=js/game.js"
  ];

const gmText_text = [
"Game Mechanic - adding skidding player",
"Game Mechanic - carrying an object",
"Game Mechanic - throwing and dropping objects"
   ];

gmTextItems.forEach((item,i) => item.innerHTML = `${gmText_text[i]}`);
gmTextItems.forEach((item,i) => item.setAttribute("title1" , "title test"));

gmTextItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${gmText_book[i]}`)
    });
});


//Populate Gallery with Random Placeholder Images
const galleryItems = document.querySelectorAll('.zoom-inner');
//const src = 'https://lorempixel.com/600/400/city/';
const src = [
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameMechanics_moving_enemies.jpg?1552396669945",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameMechanics_jumping.jpg?1551473692625",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame-mechanics_timer.jpg?1551473692531",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameMechanics_jum_height.jpg?1551473692663",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameMechanics_hitboxes.jpg?1551473693339",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgamemechanic_extralives_800.png?1552402556128",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame-mechanics_health.jpg?1551473693216",
   ];
//console.log(src)

const gm_description = [
"Enemies that move around the screen, using the tween keyword",
"Jump on enemies to zap them",
"Add a countdown timer to add more challenge to your game",
"Make player jumps higher if you press jump button longer",
"Player only gets zapped if enemies touch a middle section",
"Extra lives for your player and a graphic to show how many are left",
"Player health bar goes down when zapped for chalenging games",
   ];


const gm_example = [
"https://glitch.com/edit/#!/sgte-example-moving-enemy?path=js/game.js",
"https://glitch.com/edit/#!/game-mechanic-jump-on-enemies?path=game.js",
"https://glitch.com/edit/#!/mechanic-variable-jump-height?path=game.js",
"https://glitch.com/edit/#!/game-mechanic-smaller-sprite-collision-boxes?path=game.js",
"https://glitch.com/edit/#!/game-mechanic-timer?path=game.js",
"https://glitch.com/edit/#!/sgte-extra-lives?path=js/game.js",
"https://glitch.com/edit/#!/player-health-meter?path=game.js",
];

const gm_book = [
"https://jamm-labs.github.io/3m/#game-mechanic-add-moving-enemies",
"https://jamm-labs.github.io/3m/#game-mechanic-jumping-on-enemies",
"https://jamm-labs.github.io/3m/#game-mechanic-add-a-countdown-timer",
"https://jamm-labs.github.io/3m/#game-mechanic-longer-jumps-if-holding-jump-down",
"https://jamm-labs.github.io/3m/#game-mechanic-smaller-sprite-collision-boxes",
"https://jamm-labs.github.io/3m/#game-mechanic-extra-lives",
"https://jamm-labs.github.io/3m/#game-mechanic-player-health",
   ];

galleryItems.forEach((item,i) => item.style.backgroundImage = `url(${src[i]})`);
galleryItems.forEach((item,i) => item.setAttribute("title1" , `${gm_description[i]}`));

galleryItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${gm_book[i]}`)
    });
});


const polishItems = document.querySelectorAll('.zoom-inner_2');

//console.log(polishItems)

const polish_src = [
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_new_sounds.jpg?1551524948349",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_animate.jpg?1551523720117",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_soundtrack.png?1551473693380",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_animate_zapped_sprite.jpg?1551473693598",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_shake_screen_effect.jpg?1551525502043",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_explosion.jpg?1551473693282",
   ];

const polish_description = [
"Add new sound effects you have created to your game",
"Animate your player so it looks like it's running",
"Add a music soundtrack to play while game is running",
"Show when your player gets zapped with a dying animation",
"Screen shakes when player gets zapped for shock value",
"Create Explosions when something gets zapped",
   ];


const polish_example = [
"https://glitch.com/edit/#!/polish-add-your-own-sounds?path=game.js",
"https://glitch.com/edit/#!/polish-add-an-animated-player?path=game.js",
"https://glitch.com/edit/#!/add-polish-soundtrack?path=game.js",
"https://glitch.com/edit/#!/add-polish-animate-zapped-sprite?path=game.js",
"https://glitch.com/edit/#!/add-polish-shake-screen?path=game.js",
"https://glitch.com/edit/#!/add-polish-explosions-using-particles?path=game.js",
   ];

const polish_book = [
"https://jamm-labs.github.io/3m/#polish-adding-our-own-sound-effects",
"https://jamm-labs.github.io/3m/#polish-add-animation-to-your-character",
"https://jamm-labs.github.io/3m/#polish-add-soundtrack-music",
"https://jamm-labs.github.io/3m/#polish-animate-sprite-when-zapped",
"https://jamm-labs.github.io/3m/#polish-screen-shake",
"https://jamm-labs.github.io/3m/#polish-explosions-using-particles",
   ];


polishItems.forEach((item,i) => item.style.backgroundImage = `url(${polish_src[i]})`);
polishItems.forEach((item,i) => item.setAttribute("title1" , `${polish_description[i]}`));


//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

polishItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${polish_book[i]}`)
    });
});


const spaceItems = document.querySelectorAll('.zoom-inner_3');

//console.log(polishItems)

const space_src = [
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_background_image.jpg?1553025336829",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_moreLevels.jpg?1553025336947",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_gameSize.jpg?1553025336727",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_scaling.jpg?1553025337014",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_space_gameover.png?1557910238840",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_keysDoors.jpg?1553025337108",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_cutscene.jpg?1553026080067",
   ];

const space_description = [
"Add your own background image to set the scene",
"Add more levels to your game to increase the challenge",
"Increase the size of your game so that it scrolls when player moves",
"Resize your player and other sprites in your game",
"Create a Game Over screen when your player gets zapped",
"Make players to collect keys to open doors to progress",
"Created an animated opening scene to give starting info",
   ];


const space_example = [
"https://glitch.com/edit/#!/polish-add-background-image?path=game.js",
"https://glitch.com/edit/#!/game-over-state-add?path=game.js",
"https://glitch.com/edit/#!/add-polish-resizing-via-scaling?path=game.js",
"https://glitch.com/edit/#!/gamespace-more-levels-simple?path=js/game.js",
"https://glitch.com/edit/#!/game-mechanic-extend-game-world?path=game.js",
"https://glitch.com/edit/#!/key-and-doors-grid?path=js/game.js",
"https://glitch.com/edit/#!/cut-scene-tween-demo?path=game.js",
];

const space_book = [
"https://jamm-labs.github.io/3m/#polish-add-your-own-background",
"https://jamm-labs.github.io/3m/#game-mechanic-extending-the-game-size",
"https://jamm-labs.github.io/3m/#game-space-adding-levels",
"https://jamm-labs.github.io/3m/#polish-scaling-our-game-and-sprites",
"https://jamm-labs.github.io/3m/#game-space-add-game-over-screen",
"https://jamm-labs.github.io/3m/#game-mechanic-keys-and-doors",
"https://jamm-labs.github.io/3m/#polish-create-a-cut-opening-scene",
   ];


spaceItems.forEach((item,i) => item.style.backgroundImage = `url(${space_src[i]})`);
spaceItems.forEach((item,i) => item.setAttribute("title1" , `${space_description[i]}`));

//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

spaceItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${space_book[i]}`)
    });
});
