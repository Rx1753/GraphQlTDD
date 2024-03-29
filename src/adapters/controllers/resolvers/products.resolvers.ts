import { ProductHandler, ProductMutationHandler } from '../routes/GqlProductHandler';

//Mongo DB
export default {
    Query: {
        products: () => {
            return ProductHandler.getAllProducts();
        },
        productsByPrice: (_: any, args: any) => {
            return ProductHandler.getProductByPrice(args.min, args.max);
        },
        product: (_: any, args: any) => {
            return ProductHandler.getProductById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_: any, args: any) => {
            try {
                return ProductMutationHandler.addNewProduct(args.id, args.description, args.price);
            } catch (error) {
                console.log(`Error -------> ${error}`)
            }
        },
        addNewProductReview: (_: any, args: any) => {
            try {
                return ProductMutationHandler.addNewProductReview(args.id, args.rating, args.comment);

            } catch (error) {
                console.log(`Error -------> ${error}`)
            }
        }
    }
};



