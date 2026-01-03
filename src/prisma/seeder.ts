import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import prisma from "../database"

async function main() {
  console.log("🌱 Starting library database seeding...");

  // 🧹 CLEAN DATA (urut sesuai relasi)
  await prisma.loanItem.deleteMany();
  await prisma.loan.deleteMany();
  await prisma.book.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany({
    where:{
      email:{not:"KonjikiNoYami94326123@gmail.com"}
    }
  });

  console.log("🧹 Existing data cleaned");

  // 1️⃣ CATEGORY
  console.log("📚 Creating categories...");
  const categoryNames = [
    "Novel",
    "Teknologi",
    "Sejarah",
    "Agama",
    "Filsafat",
    "Sains",
    "Komik",
    "Pendidikan",
    "Psikologi",
    "Sastra",
  ];

  const categories = await Promise.all(
    categoryNames.map((nama) =>
      prisma.category.create({
        data: { nama },
      })
    )
  );

  console.log(`✅ ${categories.length} categories created`);

  // 2️⃣ USER
  console.log("👤 Creating users...");
  const users = await Promise.all(
    Array.from({ length: 50 }, async () => {
      return prisma.user.create({
        data: {
          nama: faker.person.fullName(),
          email: faker.internet.email().toLowerCase(),
          password: await bcrypt.hash("password123", 10),
          kota: faker.location.city(),
          role: faker.helpers.arrayElement(["MEMBER", "ADMIN"]),
        },
      });
    })
  );

  console.log(`✅ ${users.length} users created`);

  // 3️⃣ BOOK
// 3️⃣ BOOK
console.log("📖 Creating books...");
const books = await Promise.all(
  Array.from({ length: 100 }, () => {
    const category = faker.helpers.arrayElement(categories);

    return prisma.book.create({
      data: {
        nama: faker.book.title(),
        deskripsi: faker.lorem.paragraph(),
        harga: faker.number.int({ min: 10_000, max: 250_000 }),
        stok: faker.number.int({ min: 0, max: 20 }),
        coverUrl: faker.image.url(),

        // ✅ FIELD TAMBAHAN SESUAI MODEL
        tahunTerbit: faker.number.int({ min: 1995, max: 2024 }),
        penulis: faker.book.author(),
        penerbit: faker.company.name(),
        isbn: faker.datatype.boolean()
          ? faker.string.numeric(13)
          : null,

        categoryId: category.id,
      },
    });
  })
);

console.log(`✅ ${books.length} books created`);


  // 4️⃣ LOAN + LOAN ITEM
  console.log("📦 Creating loans...");
  const loans = [];

  for (let i = 0; i < 80; i++) {
    const user = faker.helpers.arrayElement(users);
    const selectedBooks = faker.helpers.arrayElements(
      books,
      faker.number.int({ min: 1, max: 3 })
    );

    const loan = await prisma.loan.create({
      data: {
        userId: user.id,
        status: faker.helpers.arrayElement(["BORROWED", "RETURNED"]),
        tanggalPinjam: faker.date.recent({ days: 30 }),
        tanggalKembali: faker.datatype.boolean()
          ? faker.date.soon({ days: 14 })
          : null,
        items: {
          create: selectedBooks.map((book) => ({
            bookId: book.id,
            qty: faker.number.int({ min: 1, max: 2 }),
          })),
        },
      },
      include: {
        items: true,
      },
    });

    loans.push(loan);
  }

  console.log(`✅ ${loans.length} loans created`);

  const totalLoanItems = loans.reduce(
    (sum, loan) => sum + loan.items.length,
    0
  );

  // 📊 SUMMARY
  console.log("\n🎉 Seeding completed!");
  console.log("📊 Summary:");
  console.log(`   - Categories : ${categories.length}`);
  console.log(`   - Users      : ${users.length}`);
  console.log(`   - Books      : ${books.length}`);
  console.log(`   - Loans      : ${loans.length}`);
  console.log(`   - LoanItems  : ${totalLoanItems}`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
