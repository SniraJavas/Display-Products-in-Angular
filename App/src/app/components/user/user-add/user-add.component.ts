import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Input() UserData = {id: 0,
  name: '',
  surname: '',
  email: '',
  role: 0}

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    
    this.rest.addUser(this.UserData).subscribe((result: { UserID: number; }) => {
      this.router.navigate(['/User-list/'+result.UserID]);
    }, (err: any) => {
      console.log(err);
    });
  }

}


