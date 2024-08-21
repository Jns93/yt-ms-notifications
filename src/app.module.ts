import { Module } from '@nestjs/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';

@Module({
 imports: [NotificationsModule, ConfigModule.forRoot()],
 exports: [],
 providers: []
})
export class AppModule {}
