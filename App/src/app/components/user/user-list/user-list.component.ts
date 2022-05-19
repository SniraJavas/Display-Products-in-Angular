import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  
  Users: User[] = [];
  selectedUser!: User;
  closeResult = '';
  isEditable = false;
 
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public rest: UserService,
    private router: Router) { }

    @Input() UserData: User = { id: 0,
      name: '',
      surname: '',
      email: '',
      role: "0"};
    
      @Input() modalTittle: string = '';
  ngOnInit(): void {
    console.log("inside ngOnInit");
    this.getUsers();
  }

  getUsers(): void {
    this.rest.getUsers().subscribe((resp: any) => {
      this.Users = resp;
    });
  }

  add(): void {
    this.router.navigate(['/user-add']);
  }

  openEdit(content: any, User : User) {
    console.log("User Edit : ", User);
    this.UserData = User;
    this.modalTittle = 'Edit User';
    this.isEditable = true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
      this.updateUser();

    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openView(content: any, User : User) {
    console.log("content ",content);
    console.log("User ",User);
    this.UserData = User;
    this.modalTittle = 'User Details'
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openDelete(content: any, User : User) {
    this.UserData = User;
    this.modalTittle = 'Press continue to DELETE this User';
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    console.log("del ",result);
    if(result == 'Continue click'){
      this.delete(this.UserData.id);
    }
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(id: number): void {
    console.log("id ", id);
    this.rest.deleteUser(id)
      .subscribe(() => {
          this.getUsers();
        }, (err: any) => {
          console.log(err);
        }
      );
  }

  updateUser() {
    this.rest.updateUser(this.UserData.id, this.UserData).subscribe((result) => {
      this.router.navigate(['/User-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
