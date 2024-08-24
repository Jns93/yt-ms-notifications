import { Module } from '@nestjs/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { featureModules } from './modules';
import { globalModules } from './modules/global';

@Module({
 imports: [
    ...featureModules ,
    ...globalModules,
    NotificationsModule, 
    ConfigModule.forRoot(), ],
 exports: [],
 providers: []
})
export class AppModule {}
