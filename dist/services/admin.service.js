import bcrypt from "bcrypt";
export class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    createAdmin = async (data) => {
        const existing = await this.prisma.findByEmail(data.email);
        if (existing) {
            throw new Error("Email sudah terdaftar");
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.create({
            nama: data.nama,
            email: data.email,
            password: hashedPassword,
            kota: data.kota,
            role: "ADMIN" // 🔐 FIXED
        });
    };
}
//# sourceMappingURL=admin.service.js.map