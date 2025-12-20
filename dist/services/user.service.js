import * as userRepo from "../repositories/user.repository";
export const getUserById = async (id) => {
    const user = await userRepo.findById(id);
    if (!user)
        throw new Error("User tidak ditemukan");
    return user;
};
export const getAllUsers = async (page, limit) => {
    const skip = (page - 1) * limit;
    const where = {
        deletedAt: null
    };
    const users = await userRepo.findAll(skip, limit, where);
    const total = await userRepo.countAll(where);
    return {
        users,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
    };
};
export const deleteUser = async (id) => {
    await getUserById(id);
    return userRepo.softDelete(id);
};
//# sourceMappingURL=user.service.js.map