import { PartialType } from "@nestjs/swagger";
import { baseProductDTO } from "./base-product.dto";

export class updateProductDTO extends PartialType(baseProductDTO){
    
}