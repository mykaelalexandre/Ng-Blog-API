import { Injectable } from "@nestjs/common";
import { Observable, from } from "rxjs";
import { Repository} from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "../entities/PostEntity";
import { CreatePostDTO } from "../dtos/createPostDTO";

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

    public create(CreatePostDTO: CreatePostDTO) { 
     return this.postRepository.save(CreatePostDTO);
    }
}