// task 0 
const player1 = {
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['pika', 'kunai', 'ax', 'knife'],
    attack: function () {
        console.log(this.name + ' fight');
    },
};
player1.attack();

const player2 = {
    name: 'LuiKang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['arrow', 'kunai', 'ax', 'knife'],
    attack: function () {
        console.log(this.name + ' fight');
    }
};
player2.attack();


// task 1 2 3*
function createPlayer(player, pers) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.style.width = pers.hp + '%';
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = pers.name;
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = pers.img;
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
