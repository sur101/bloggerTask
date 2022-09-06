import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="p-8">
        {
          [1, 2, 3, 4].map((item) =>
            <div key={item}>
              <BlogCard
                title="Tajmahal"
                author="-shahjahaan"
                img="/images/card3.jpg"
                body="
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam atque iure tempora qui tempore amet, at distinctio adipisci. Dolor repellat molestiae asperiores ab expedita sed tenetur consequuntur adipisci a veritatis
            "/>

            </div>)
        }

      </main>
      <Footer />

    </div>
  )
}
