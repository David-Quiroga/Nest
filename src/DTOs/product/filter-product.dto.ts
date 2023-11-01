import { IsAlphanumeric, IsOptional, IsString } from "class-validator";

class filterDto extends paginationDto{
    @IsOptional()
    @IsString()
    readonly title;
    
    //TODO agregar el codigo en el product entity
    @IsOptional()
    @IsAlphanumeric()
    readonly code;

}