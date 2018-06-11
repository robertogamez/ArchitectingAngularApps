import { Subject } from './subject';
import { Observer } from './observer';
import { ProductModel } from './product.model';
import { ProductUI } from './product-ui';

const subject = new Subject();
const observer = <Observer>{
    update: () => console.log('First Observer Updated')
};

const observer2 = <Observer>{
    update: () => console.log('Second Observer Updated')
};

subject.attach(observer);
subject.attach(observer2);
subject.notify();

const subjectProduct = new ProductModel();

const observerProduct = new ProductUI(subjectProduct);
const observerProduct2 = new ProductUI(subjectProduct);

subjectProduct.title = 'RxJs in Action';



