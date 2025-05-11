import { FaPhoneAlt } from "react-icons/fa";
import { icons } from "../../utils/icons";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";

export default function About() {
  const icon = icons;
  const { getData } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getData("/team-section");
      setUsers(response.data); // faqat massivni oling!
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="w-full py-10 mt-4 md:py-16 bg-neutral-50">
        <div className="px-[16px]">
          <div className="max-w-[900px] mx-auto rounded-2xl shadow-lg p-8 md:p-12 space-y-10 bg-white text-neutral-900">
            <h2 className="text-2xl md:text-3xl font-inter font-extrabold text-neutral-900 mb-2">
              About AORON
            </h2>
            <p className="text-lg text-neutral-700 font-inter mb-0 mt-[16px]">
              AORON is a manufacturing brand offering stylish, quality and
              competitive apparel for B2B partnerships. We have been operating
              since 1991 and specialize in creating men's and women's clothing,
              focused on wholesale, retail chains and custom orders for brands
              and boutiques.
            </p>
            <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
              Today we develop two directions:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
              <li>
                Prince - a classic line of men's suits, proven by time and
                quality;
              </li>
              <li>
                AORON - a modern brand with an expanded assortment: from casual
                wear to accessories and shoes.
              </li>
            </ul>
            <hr className="border-t border-neutral-300 my-4" />

            <h2 className="text-2xl md:text-3xl font-inter font-extrabold text-neutral-900 mb-2">
              Production facilities
            </h2>
            <p className="text-lg text-neutral-700 font-inter mb-0 mt-[16px]">
              Our company started with a team of 4 people and today employs over
              100 people. In the summer of 2025, we are launching a new factory
              with the ability to scale production - up to 500 employees and
              5000+ units per month.
            </p>
            <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
              We offer:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
              <li>Stable volumes and delivery terms</li>
              <li>Quality control at every stage</li>
              <li>Flexibility to work under private label</li>
              <li>Individual approach to B2B clients</li>
            </ul>
            <hr className="border-t border-neutral-300 my-4" />
            <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
              Why choose us
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
              <li>
                More than 30 years of experience in the market of Uzbekistan
              </li>
              <li>Full cycle of production - from design to packaging</li>
              <li>Ability to create collections for your brand</li>
              <li>Modern models inspired by global trends</li>
              <li>
                Favorable conditions for distributors, marketplaces and stores
              </li>
            </ul>
            <hr className="border-t border-neutral-300 my-4" />
            <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
              New assortment 2025
            </h2>
            <h2 className="text-lg text-neutral-700 mb-0 mt-[16px]">
              Men's and women's T-shirts, shirts, shorts
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
              <li>Men's and women's T-shirts, shirts, shorts</li>
              <li>Shoes, bags, belts, accessories</li>
              <li>Custom tailoring</li>
              <li>
                Collaborations and capsule collections to your specifications
              </li>
            </ul>
            <hr className="border-t border-neutral-300 my-4" />
            <h2 className="text-xl font-inter font-bold text-primary mt-[16px] mb-0">
              Ready for cooperation
            </h2>
            <h2 className="text-lg text-neutral-700 mb-0 mt-[16px]">
              We are open to cooperation with:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-800 pl-4 mt-[16px] mb-0">
              <li>wholesale buyers</li>
              <li>clothing stores</li>
              <li>marketplaces</li>
              <li>international buyers</li>
              <li>brands willing to produce collections under their name</li>
            </ul>
            <hr className="border-t border-neutral-300 my-4" />

            <div className="flex items-center gap-2">
              <span className="text-red-400">
                <FaPhoneAlt />
              </span>{" "}
              <p className="text-lg font-inter text-neutral-900">
                Contact us to get catalog, samples
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 mt-[40px] bg-[hsl(240,5%,10%)] bg-primary text-primary-foreground">
          <div className="max-w-[768px] mx-auto text-center px-[16px]">
            <h2 className="heading-md mb-6 text-white text-[30px] font-inter">
              Our Mission
            </h2>
            <p className="text-xl font-light font-inter text-white leading-relaxed">
              To create exceptional menswear that empowers men to look and feel
              their best, while maintaining a commitment to quality,
              sustainability, and ethical practices.
            </p>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <h2 className="heading-md mb-10 text-[30px] font-inter text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1368px] mx-auto px-[16px]">
            <div className="flex flex-col items-center p-[24px] hover:bg-gray-100 rounded-xl transition duration-300 ease-out">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                {icon.CircleIcon}
              </div>
              <p className="text-lg font-medium font-inter my-[16px]">
                Sustainability
              </p>
              <p className="font-inter font-medium text-gray-500 text-center">
                We're committed to reducing our environmental impact through
                responsible sourcing and sustainable practices.
              </p>
            </div>

            <div className="flex flex-col items-center p-[24px] hover:bg-gray-100 rounded-xl transition duration-300 ease-out">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                {icon.CircleIcon}
              </div>
              <p className="text-lg font-medium font-inter my-[16px]">
                Quality First
              </p>
              <p className="font-inter font-medium text-gray-500 text-center">
                We never compromise on quality. From fabrics to construction,
                every element is carefully chosen for excellence.
              </p>
            </div>

            <div className="flex flex-col items-center p-[24px] hover:bg-gray-100 rounded-xl transition duration-300 ease-out">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                {icon.CircleIcon}
              </div>
              <p className="text-lg font-medium font-inter my-[16px]">
                about.card3.title
              </p>
              <p className="font-inter font-medium text-gray-500 text-center">
                We're committed to reducing our environmental impact through
                responsible sourcing and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-100">
          <h2 className="heading-md mb-10 text-[30px] font-inter text-center">
            Our Team
          </h2>
          <div className="max-w-[1368px] mx-auto px-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(users) &&
              users.map((user, index) => (
                <div className="flex items-center flex-col" key={index}>
                  <img
                    className="w-[200px] h-[200px] rounded-full object-cover"
                    src={`https://testaoron.limsa.uz/${user?.image}`}
                    alt={user.full_name}
                  />
                  <h2 className="font-medium text-lg font-inter mt-[12px] mb-0">
                    {user.full_name}
                  </h2>
                  <p className="text-gray-500 font-inter mt-[12px] mb-0 font-medium text-[16px]">
                    {user.position_en}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
