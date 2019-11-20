import { Injectable } from "@nestjs/common";
import { Observable, from } from "rxjs";
import { Repository} from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "../entities/PostEntity";
import { CreatePostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/PostDto";

@Injectable({

})

export class PostService{
    constructor(

        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
      ) {}
    public findAll() :Observable<PostEntity[]> {
        return from( this.postRepository.find());
    }

    public create(CreatePostDTO: CreatePostDto): Promise<PostDto> { 
     return this.postRepository.save(CreatePostDTO);
    }
}