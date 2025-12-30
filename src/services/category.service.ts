import { Prisma } from "../generated"
import * as categoryRepo from "../repositories/category.repository"

export class CategoryService{
constructor(private prisma:categoryRepo.CategoryRepository){

}
  
   getAllCategories = async () => {
  return this.prisma.findAll()
}

 getCategoryById = async (id: string) => {
  const category = await this.prisma.findById(id)

  if (!category) {
    throw new Error("Category tidak ditemukan")
  }

  return category
}

 createCategory = async (nama: string) => {
  const existing = await this.prisma.findByName(nama)

  if (existing) {
    throw new Error("Category sudah ada")
  }

  return this.prisma.create({ nama })
}

 updateCategory = async (
  id: string,
  nama: Prisma.CategoryUpdateInput
) => {
  return this.prisma.update(id, nama)
}

 deleteCategory = async (id: string) => {
  return this.prisma.softDelete(id)
}

}