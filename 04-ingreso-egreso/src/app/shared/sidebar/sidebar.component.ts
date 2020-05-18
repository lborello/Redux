import {
  Component,
  OnInit
} from "@angular/core";
import { Router } from "@angular/router";

import { Store } from "@ngrx/store";

import { AppState } from "../../app.reducer";
import { AuthService } from "../../services/auth.service";
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {
  nombre = '';
userSubs: Subscription ;
  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<AppState>) { }


  ngOnInit() {
  this.userSubs =   this.store.select('user')
    .pipe(
      filter(({user}) => user != null )
    )
    .subscribe(({ user }) => {
             this.nombre = user.nombre;
    });
  }
  ngOnDestroy(){
    this.userSubs.unsubscribe() ;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });

  }

}
