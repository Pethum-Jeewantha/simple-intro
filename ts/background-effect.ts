import {x as mouseX,y as mouseY} from './mouse-listener.js';

class Moveable{
    private elm:JQuery;
    
    constructor(private dy: number = 0, private dx:number = 0){
        this.elm = $('<div class="moveable"></div>');
        this.dy = 1 + ((Math.random() * 10) * Math.sin((Math.random() * 361) * Math.PI / 180));
        this.dx = 1 + ((Math.random() * 10) * Math.sin((Math.random() * 361) * Math.PI / 180));
        
        this.elm.css('background-color', `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
        this.elm.css('border-radius', `${Math.floor(Math.random() * 101)}%`);
        this.elm.css('transform', `rotate(${Math.random() * 361}deg) scale(${Math.random()})`);
        $('body').append(this.elm);
        
        this.elm.offset({
            top: Math.random() * ($(window).height()! - this.elm.height()!),
            left: Math.random() * ($(window).width()! - this.elm.width()!)
        });
    }

    move(): void{
        let top = this.elm.offset()!.top;
        let left = this.elm.offset()!.left;

        if(mouseX !== -1 && mouseY !== -1){
            let elmX = left + this.elm.width()! / 2;
            let elmY = top + this.elm.height()! / 2;

            let x = elmX - mouseX;
            let y = elmY - mouseY;

            let hypot = Math.hypot(elmX - mouseX, elmY- mouseY);
            let radius = $("#circle").width()! / 2 + 15;

            if (hypot <=  radius){

                if (x > 0){
                    this.elm.offset({
                        left: left + (radius -x)
                    });
                    left = left  + (radius  -x);
                }else{
                    this.elm.offset({
                        left: left - (radius - Math.abs(x)) - this.elm.width()!
                    });
                    left = left - (radius - Math.abs(x)) - this.elm.width()!;
                }

                if (y > 0){
                    this.elm.offset({
                        top: top + (radius - y)
                    });
                    top = top + (radius - y);
                }else{
                    this.elm.offset({
                        top: top - (radius - Math.abs(y)) - this.elm.height()!
                    });
                    top = top - (radius - Math.abs(y)) - this.elm.height()!;
                }  


                this.dx = -this.dx;
                this.dy = -this.dy;
            }
        }

        this.elm.offset({
            top: top + this.dy,
            left: left + this.dx
        });

        top = this.elm.offset()!.top;
        left = this.elm.offset()!.left;
        if((top <=0) || ((top + this.elm.height()!) >= $(window).height()!)){
            this.dy = -this.dy;
        }

        if((left<=0) || (left + this.elm.width()! >= $(window).width()!)){
            this.dx = -this.dx;
        }
    }
}

const moveables:Moveable[] = [];

for (let i = 0; i < 50; i++) {
    moveables.push(new Moveable());
}

setInterval(()=> moveables.forEach(mo => mo.move()),15);
