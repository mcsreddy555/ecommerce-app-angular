export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;


    constructor(id, name, description = '', price =0, imageUrl = 'https://cdn.dxomark.com/wp-content/uploads/medias/post-30837/samsung_galaxy_a50-1024x768.jpg'){
        this.id=id,
        this.name=name,
        this.description=description,
        this.price=price,
        this.imageUrl=imageUrl
    }
}
