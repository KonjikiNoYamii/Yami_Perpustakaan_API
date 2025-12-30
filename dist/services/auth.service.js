import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../utils/env.js";
export class AuthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    register = async (data) => {
        const existing = await this.prisma.findByEmail(data.email);
        if (existing)
            throw new Error("Email sudah terdaftar");
        const hashed = await bcrypt.hash(data.password, 10);
        return this.prisma.create({
            nama: data.nama,
            email: data.email,
            password: hashed,
            kota: data.kota,
            role: data.role
        });
    };
    login = async (data) => {
        const user = await this.prisma.findByEmail(data.email);
        if (!user)
            throw new Error("Email atau password salah");
        const valid = await bcrypt.compare(data.password, user.password);
        if (!valid)
            throw new Error("Email atau password salah");
        const token = jwt.sign({ id: user.id, role: user.role }, config.JWT_SECRET, { expiresIn: "1d" });
        return {
            token,
            user: {
                id: user.id,
                nama: user.nama,
                email: user.email,
                role: user.role
            }
        };
    };
}
//# sourceMappingURL=auth.service.js.map
