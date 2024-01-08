import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TimerTool';
  // ms: any='0'+0;
  // sec: any='0'+0;
  // min: any='0'+5;
  // hr: any='0'+0;
  ms: any=100;
  sec: any=59;
  min: any='0'+4;
  startTimer: any;
  running =false;

  start():void{
    if(!this.running){
      this.running= true;
      this.startTimer=setInterval(()=>{
      

        this.ms--;
        
       // this.ms=this.ms<10?'0'+this.ms: this.ms;

        if(this.ms===0){
          this.sec--;
          //this.sec=this.sec<10?'0'+this.sec: this.sec;
          this.ms=100;
        }

        if(this.sec===0){
          this.min--;
         // this.min=this.min<10?'0'+ this.sec : this.sec;
          this.sec=60;
        }
        if(this.min===0 && this.sec===0 && this.ms===0){
          this.stop();
          this.running=true;
        }
        
      },10);
    }
    else
    {
      this.stop();
    }
  }

  stop():void{
    clearInterval(this.startTimer);
    this.running=false;
  }
  reset(): void{
    clearInterval(this.startTimer);
    this.running=false;
    this.min=4;
    this.sec=59;
    this.ms=100;
  }
}
