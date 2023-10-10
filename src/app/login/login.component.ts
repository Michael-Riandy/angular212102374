import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nama = 'Michael Riandy';
  nim = '212102374';
  constructor(private renderer: Renderer2){
    this.renderer.addClass(document.body, "login-page");
  }

  ngOnInit(): void {
    
  }
}
