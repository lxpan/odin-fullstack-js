import { Tracer } from './Tracer.js';

class Widget {

    draw() {
        return "drawing";
    }
}

class NiceWidget extends Tracer(Widget) {

    drawingNicely() {
        this.trace('invoking...');
        return "Nicely: " + this.draw();
    }
}

const widget = new NiceWidget;
const result = widget.drawingNicely();
console.log(result);
