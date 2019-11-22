import { Injectable } from "@nestjs/common";
import { Observable, from } from "rxjs";
import { Repository} from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "../entities/PostEntity";
import { CreatePostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/PostDto";
import {map} from 'rxjs/operators';
import _ = require("lodash");
import {EditPostDto} from '../dtos/EditPostDto';

@Injectable({

})

export class PostService{
    constructor(

        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
      ) {}
    public findAll() :Observable<PostEntity[]> {
        return from( this.postRepository.find())
        .pipe(
            map((posts) => _.orderBy(posts, ['id'], ['desc'])),
        );
    }

    public create(CreatePostDTO: CreatePostDto): Promise<PostDto> { 
     return this.postRepository.save(CreatePostDTO);
        
    }
    public edit(EditPostDto: EditPostDto): Promise<PostDto> { 
        return this.postRepository.save(EditPostDto);
           
       }
    public delete(postId: number): void { 
         this.postRepository.delete(postId);
           
       }
}