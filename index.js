const box = document.getElementById('box');
const player = {
    controls: {
        w: 'moveUp',
        s: 'moveDown',
        a: 'moveLeft',
        d: 'moveRight',
    },
    POSITION: {
        y: 1,
        x: 1
    },
    limitMoviment: {
        top: 33,
        left: 46,
        right: -46,
        bottom: -30
    },
    moviment(key){
        if(key === "moveUp"){
            this.POSITION.x = this.POSITION.x < this.limitMoviment.top ?  ++this.POSITION.x : this.POSITION.x;
        }

        if(key === "moveDown"){
            this.POSITION.x = this.POSITION.x > this.limitMoviment.bottom ? --this.POSITION.x : this.POSITION.x;
        }

        if(key === "moveLeft") {
            box.style.transform = 'scalex(-1.0)';
            this.POSITION.y = this.POSITION.y < this.limitMoviment.left ?  ++this.POSITION.y : this.POSITION.y;
        }

        if(key === "moveRight") {
            box.style.transform = 'scalex(1.0)';
            this.POSITION.y = this.POSITION.y > this.limitMoviment.right ? --this.POSITION.y : this.POSITION.y;
        }

        box.style.bottom = `${this.POSITION.x}vw`
        box.style.right = `${this.POSITION.y}vw`
    }
}

document.addEventListener('keypress', (event) => {
    player.moviment(player.controls[event.key])
})



