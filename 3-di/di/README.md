
AdminService extends UserService {
  goadmin() {

  }
}

{ provide: AdminService, useClass: AdminService },
{ provide: UserService, useExisting: AdminService }


constructor(userService: UserService) {
  // userService.goadmin()
}






{ provide: EMAIL_VALIDATORS, useClass: MyEmailValidator, multi: true },

constructor(validators: EMAIL_VALIDATORS) {
  validators => [ 1, ,2 , 3,  myEmailValidator ]
}