import { IsString, Allow, IsNotEmpty, IsNumber, IsPositive, IsAlphanumeric, IsAlpha } from "class-validator";


export class baseProductDTO{
    @Allow()
    @IsNotEmpty() //! isNotEmptyValidationOption()
    @IsString()
    @IsAlpha()
    readonly title;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;


}