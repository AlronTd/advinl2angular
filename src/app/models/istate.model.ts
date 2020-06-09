import { IProduct } from './i-product';
import { ShoppingCart } from './ishoppingcart.model';

export interface IState {
    readonly productcatalog: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: ShoppingCart
}