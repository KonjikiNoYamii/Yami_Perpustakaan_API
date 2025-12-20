import type { Prisma } from "../generated/client";
import type { BookCreateInput, BookUpdateInput } from "../generated/models";
import { getPrisma } from "../prisma";

const prisma = getPrisma()

export const findAll = async(skip:number,take:number, where:Prisma.BookWhereInput,orderBy:Prisma.BookOrderByWithRelationInput) =>{
    return prisma.book.findMany({
        skip,
        take,
        where,
        orderBy,
        include:{
            category:true
        }
    })

}
export const countAll = (where:Prisma.BookWhereInput) =>{
    return prisma.book.count({
        where
    })
}

export const findById = async(id:string) =>{
    return prisma.book.findUnique({
        where:{
            id,
            deletedAt:null
        },
        include:{
            category:true
        }
    })
}

export const create = async(data:BookCreateInput) =>{
    return prisma.book.create({
        data
    })
}

export const update = (id:string, data:BookUpdateInput) =>{
    return prisma.book.update({
        where:{
            id,
            deletedAt:null
        },
        include:{
            category:true
        },
        data

    })
}

export const softDelete = async(id:string) =>{
    return prisma.book.update({
        where:{
            id,
            deletedAt:null
        },
        include:{
            category:true
        },
        data:{
            deletedAt:new Date()
        },
    })
}