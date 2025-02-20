export default async function ProductDetails({
    params,
} : {
    params : Promise< {productId : string} >;
}){
    const paramsID = (await params).productId;
    return (
        <h1> Product Details about Product {paramsID}</h1> 
    )
}