import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    if (!this.auth.isAdmin()) { this.router.navigateByUrl("/user/login");}
  }

}
