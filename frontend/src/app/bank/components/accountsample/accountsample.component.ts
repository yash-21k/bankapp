import { Component } from '@angular/core';
import { AccountTS } from '../../types/tstypes/Accountts';

@Component({
  selector: 'app-accountsample',
  standalone: true,
  imports: [],
  templateUrl: './accountsample.component.html',
  styleUrls: ['./accountsample.component.css']
})
export class AccountsampleComponent {
   account:AccountTS=new AccountTS("1",500.00,"1");
<<<<<<< HEAD
}
=======
}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
