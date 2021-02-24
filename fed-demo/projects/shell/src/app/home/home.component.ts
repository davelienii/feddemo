import {Compiler, Component, Injector, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todoComponent?: Type<any>;
  constructor(
    private compiler: Compiler,
    private injector: Injector,
  ) { }

  ngOnInit(): void {
    //this.loadLazy();
  }

  loadLazy() {
    import('mfe1/TodoModule')
      .then(mod => mod.TodoModule)
        .then(tmodule => {
          this.todoComponent = tmodule.components['lazy'];
          return tmodule;
        })
      .then(tmodule => this.compiler.compileModuleAsync(tmodule))
      .then(factory => {factory.create(this.injector);
      });
  }
}
