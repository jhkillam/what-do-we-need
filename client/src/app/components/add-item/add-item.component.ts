import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item = {
    itemName: '',
    store: '',
    purchased: false
  }
  submitted = false

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  saveItem(): void {
    const data = {
      itemName: this.item.itemName,
      store: this.item.store
    }

    this.itemService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true
        },
        error => {
          console.log(error)
        })
  }

  newItem(): void {
    this.submitted = false
    this.item = {
      itemName: '',
      store: '',
      purchased: false
    }
  }
}
