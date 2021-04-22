import { Component, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { KudosGlobalFileHandlerService } from "./common/services/global-file-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "Kudos Trucking Coorporation";

  @ViewChild("dropZone", { static: true })
  dropZone: any;

  constructor(
    private titleService: Title,
    private fileHandler: KudosGlobalFileHandlerService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  ngAfterViewInit() {
    this.fileHandler.initializeDropZone(this.dropZone);
    this.fileHandler.attachHandlers();
  }
}
