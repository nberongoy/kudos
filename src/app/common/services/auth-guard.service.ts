import { Injectable } from "@angular/core";
import { KudosSessionService } from "./session.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  constructor(
    private sessionService: KudosSessionService,
    private router: Router
  ) {}
  canActivate() {
    if (this.sessionService.sessionExists()) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
