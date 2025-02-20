export default async function ProductReviews({
    params,
} : {
    params : Promise< {reviewId : string, productId : string} >;
}){
    const {productId, reviewId} = await params;
    return (
        <h1> review {reviewId} about Product {productId}</h1> 
    )
}