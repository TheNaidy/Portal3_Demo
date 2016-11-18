import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filterbox',
    template: `
            <input #input type="text" class="form-control" placeholder="Search licenses" (keyup)="keyPressed(input.value)">
    `
})
export class FilterBoxComponent {
    @Output() update = new EventEmitter();


    ngOnInIt() {
        this.update.emit('');
    }

    public keyPressed(searchString: string) {
        this.update.emit({ value: searchString });
    }
}
