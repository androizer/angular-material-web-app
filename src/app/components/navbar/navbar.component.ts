import { Component, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatSidenav } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RestService } from 'src/app/services/rest.service';
import { BroadcastService } from 'src/app/services/broadcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  state: {[k: string]: any} = {}; // Remember to initialize it too, else will get error(cannot set property ton undefined)
  @ViewChild('drawer') drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private restService: RestService,
    private broadcastService: BroadcastService,
    private router: Router
  ) {
    this.broadcastService.loginStatus.subscribe((value: boolean) => {
      console.log('Broadcast LoginStatus value -- > ', value);
      this.state.loginStatus = value;
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.restService.authenticateUser(result).subscribe(
          data => {
            console.log(data);
            this.broadcastService.changeLoginStatus(true);
            this.router.navigate(['home']);
          },
          error => {
            console.error(error);
          },
          () => console.log('Observable Complete')
        );
      }
    });

    if (this.drawer.opened) {
      this.drawer.close();
    }
  }
}
