import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef:any
  constructor(
    public modalService:NgbModal
  ){

  }
  ngOnInit(): void {
  
  }

  openWidgetModal(modalContent:any){
    this.modalRef=this.modalService.open(modalContent, { windowClass: 'ap-profile-page-widgetModa' });
    const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.classList.add('ap-profile-page-custom-backdrop');
        }
  }
}
