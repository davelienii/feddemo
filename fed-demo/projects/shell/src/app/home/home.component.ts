import {Component, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todoComponent?: Type<any>;
  constructor() { }

  ngOnInit(): void {
  }

  loadLazy() {
    import('mfe1/TodoModule')
      .then(mod => mod.TodoModule)
        .then(tmodule => {
          this.todoComponent = tmodule.components['lazy'];
        });
  }
}
