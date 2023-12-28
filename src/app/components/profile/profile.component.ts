import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userId = '';
  userName = '';
  userAddress = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  //initize : method called
  ngOnInit(): void {
    const users = this.activatedRoute.snapshot.data['myData'];
    console.log(users);

    //one way of fetching
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    console.log(`UserId : ${userId}`);
    const userId1 = this.activatedRoute.snapshot.params['userId'];
    console.log(`User Id : ${userId1}`);
    // console.log(this.activatedRoute.snapshot.paramMap.getAll('userId'));

    //2nd way of fetching data
    //Observable

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const userId = paramMap.get('userId');
      const userName = paramMap.get('userName');
      const userAddress = paramMap.get('userAddress');
      console.log(`User id  by using observable: ${userId}`);
      console.log(`User userName  by using observable: ${userName}`);
      console.log(`User userAddress  by using observable: ${userAddress}`);
      this.userId = userId || '';
      this.userName = userName || '';
      this.userAddress = userAddress || '';
    });

    this.activatedRoute.params.subscribe((params) => {
      const userId = params['userId'];
      console.log(`User id by Observable: ${userId}`);
    });
  }
}
