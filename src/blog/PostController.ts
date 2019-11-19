import { Controller, Get, Post, Body } from "@nestjs/common";
import { Observable } from "rxjs";
import { PostService } from "./services/PostService";
import { PostEntity } from "./entities/PostEntity";
import {CreatePostDTO} from "./dtos/createPostDTO";

@Controller('posts')

export class PostControler {

    constructor(private postService: PostService){

    }

    @Get()
    findAll(): Observable<PostEntity[]>{
        return this.postService.findAll();
    }
    @Post()
    create(@Body() CreatePostDTO: CreatePostDTO){
        this.postService.create(CreatePostDTO);
    }
}