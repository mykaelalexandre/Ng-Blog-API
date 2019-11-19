import { Module } from "@nestjs/common";
import { PostService } from "./services/PostService";
import { PostControler } from "./PostController";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from "./entities/PostEntity";


@Module({
    imports:[
        TypeOrmModule.forFeature([PostEntity]),
    ],
    controllers:[
        PostControler
    ],
    providers:[
        PostService
    ],
})
export class BlogModule{

}