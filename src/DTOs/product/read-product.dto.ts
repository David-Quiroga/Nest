import {Exclude, Expose} from 'class-transformer'
import { baseProductDTO } from './base-product.dto';

@Exclude()
export class readProductDTO extends baseProductDTO{
    @Expose()
    readonly id;
    
    @Expose()
    readonly title;
    
    @Expose()
    readonly price;
    
    @Expose()
    readonly description;
    
    @Expose()
    readonly image;
}