import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../../../angular_client/api/burgers.service';


@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers;
  constructor(private burgersService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgers = this.burgersService.listBurgers()
        .subscribe(burgers => this.burgers = burgers);
  }

}
