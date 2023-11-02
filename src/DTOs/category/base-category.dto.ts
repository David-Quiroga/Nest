import { Allow, IsNotEmpty, IsString, IsAlpha, IsAlphanumeric } from "class-validator";

export class baseCategoryDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    readonly title;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;
}