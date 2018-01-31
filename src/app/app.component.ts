import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    form;
    ngOnInit(){
    	this.form = new FormGroup({
    		userText: new FormControl(""),
    		upperCaseText: new FormControl(""),
    		lowerCaseText: new FormControl(""),
    		titleCaseText: new FormControl("")
    	});
    }

    textChanged(value){
    	if(value != ""){
    		this.form.patchValue({upperCaseText: value.toUpperCase()});
    		this.form.patchValue({lowerCaseText: value.toLowerCase()});
    		this.form.patchValue({titleCaseText: this.titleCase(value)});
    	}else{
    		this.form.patchValue({upperCaseText: ""});
    		this.form.patchValue({lowerCaseText: ""});
    		this.form.patchValue({titleCaseText: ""});
    	}
    }

    titleCase(string){
    	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}
