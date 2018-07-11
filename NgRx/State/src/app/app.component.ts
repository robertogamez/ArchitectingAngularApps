import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-counter></app-counter>
        <hr />
        <app-jedi-list></app-jedi-list>
    `
})
export class AppComponent {

    constructor(
    ) {
        
    }

}
