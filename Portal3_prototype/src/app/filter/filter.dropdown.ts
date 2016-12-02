import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filterdropdown',
    template: `
                            <h3>Show all licenses where</h3>
                            <div class="form-group">
                                <select name="" class="form-control">
                                    <option value="">Select filter</option>
                                    <option value="active">Status</option>
                                    <option value="active">Type</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="" class="form-control">
                                    <option value="">Select a value</option>
                                    <option value="active">Active</option>
                                    <option value="active">Inactive</option>
                                </select>
                            </div>
                    <button class="btn btn-success btn-lg m-t-1">Add filter</button>
    `
})
export class FilterDropdownComponent {
    }