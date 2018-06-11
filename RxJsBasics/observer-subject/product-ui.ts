import { Observer } from './observer';
import { ProductModel } from './product.model';

export class ProductUI implements Observer {

    constructor(private model: ProductModel) {
        this.model.attach(this);
        this.renderUI();
    }

    renderUI() {
        console.log('calling RenderUI');
        this.draw();
    }

    draw() {
        // implement
        console.log("calling draw: " + this.model.title);
    }

    update() {
        console.log('calling update');
        this.renderUI();
    }

}