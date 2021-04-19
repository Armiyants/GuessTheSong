import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message): void{
      this.toastr.success(message);
  }

  showError(message): void{
      this.toastr.error(message);
  }

  showInfo(message): void{
      this.toastr.info(message);
  }

  showWarning(message): void{
      this.toastr.warning(message);
  }
}
