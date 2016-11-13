import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'filterbox',
    template: `
            <input #input type="text" class="form-control" placeholder="Search licenses" (input)="update.emit(input.value)">
    `
})
export class FilterBox {
    @Output() update = new EventEmitter();


    ngOnInIt() {
        this.update.emit('');
    }
}