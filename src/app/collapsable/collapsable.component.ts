import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css'],
})
export class CollapsableComponent {
  @Input() collapsed = false;
}
