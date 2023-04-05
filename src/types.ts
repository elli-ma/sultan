export type Product = {
    url: string,
    name: string,
    type: string,
    weight: string,
    volume: string,
    amount: string,
    id: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: number,
    currency: string,
    article: number,
    category: number[],
    popularity: number
}

export type Category = {
    name: string,
    id: number
}