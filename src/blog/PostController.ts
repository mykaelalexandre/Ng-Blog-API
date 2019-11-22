import { Controller, Get, Post, Body, Delete, Put, Param } from "@nestjs/common";
import { Observable } from "rxjs";
import { PostService } from "./services/PostService";
import { PostEntity } from "./entities/PostEntity";
import {CreatePostDto} from "./dtos/CreatePostDto";
import { PostDto } from "./dtos/PostDto";
import { EditPostDto } from "./dtos/EditPostDto";

@Controller('posts')

export class PostControler {

    constructor(private postService: PostService){

    }

    @Get()
    findAll(): Observable<PostEntity[]>{
        return this.postService.findAll();
    }
    @Post()
    create(@Body() CreatePostDTO: CreatePostDto): Promise<PostDto> {
       return this.postService.create(CreatePostDTO);
    }
    @Put()
    edit(@Body() EditPostDto: EditPostDto): Promise<PostDto> {
       return this.postService.edit(EditPostDto);
    }
    @Delete(':id')
    delete(@Param() postId: number) {
        this.postService.delete(postId);
    }
}