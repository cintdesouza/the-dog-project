import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), FlexLayoutModule],
  exports: [],
})
export class AppModules {}
