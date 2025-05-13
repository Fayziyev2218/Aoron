import { useState } from "react";


export default function Catalog() {
      const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <div className="text-center bg-[#F4F4F5] p-[15px]">
                    <h1 className="text-3xl pt-[40px] pb-[20px] font-bold">Our Collection</h1>
                    <p className="text-[#71717A] p-[5px]">Browse our collection of premium menswear, designed with quality</p>
                    <p className="text-[#71717A] p-[5px]">and style in mind.</p>
                </div>
                <div>
                <br />
                    <div className="w-[1440px] flex items-center justify-between m-auto">
<div className="hidden md:block w-full md:w-64 space-y-6 text-sm text-black">
  <aside className="space-y-6">
    {/* Categories */}
    <div>
      <h3 className="font-medium mb-3">Categories</h3>
      <ul className="space-y-1">
        <li className="cursor-pointer block w-full text-left px-3 py-2 rounded-md font-semibold bg-black text-white">
          View All Products
        </li>
        <li className="cursor-pointer block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition">
          t-shirts
        </li>
        <li className="cursor-pointer block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition">
          shorts
        </li>
        <li className="cursor-pointer block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition">
          suits
        </li>
      </ul>
    </div>

    {/* Sizes */}
    <div>
      <h3 className="font-bold mb-2">Sizes</h3>
      <div className="flex flex-wrap gap-2">
        <button className="border border-gray-300 px-3 py-1 rounded-md bg-white hover:bg-gray-100 transition">
          44-52
        </button>
      </div>
    </div>

    {/* Colors */}
    <div>
      <h3 className="font-medium mb-3">Colors</h3>
      <div className="flex flex-wrap gap-2">
        {[
          { name: 'black', color: 'rgb(0,0,0)' },
          { name: 'white', color: 'rgb(255,255,255)' },
          { name: 'gray', color: 'rgb(128,128,128)' },
          { name: 'Blue', color: 'rgb(0,0,255)' },
          { name: 'Yellow', color: 'rgb(255,255,0)' },
          { name: 'brown', color: 'rgb(165,42,42)' },
        ].map(({ name, color }, index) => (
          <button
            key={index}
            className="flex items-center space-x-2 px-3 py-1 text-xs rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            <div
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></div>
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Clear Filters */}
    <button className="mt-4 text-sm text-red-500 underline hover:text-red-600 transition">
      Clear filters
    </button>
  </aside>
</div>

                        <div>Product</div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}