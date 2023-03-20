export interface Books {
    id:number,
    name:string,
    description:string,
    price:number,
    image:string,
    user_id:number,
    writer_id:number,
    category_id:number,
    created_at:Date,
    updated_at:Date

}

export interface apiBooks{
    data:Array<Books>

}

export interface category{
  category_id:number,
  name:string
}
export interface cat{
  data:Array<category>
}

export interface writer{
  writer_id:number,
  name:string

}

