import { NgModule } from '@angular/core';
import { ContadorPipe } from './contador/contador';
@NgModule({
	declarations: [ContadorPipe],
	imports: [],
	exports: [ContadorPipe]
})
export class PipesModule {}
