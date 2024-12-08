import React from 'react'

const Products = () => {
  return (
    <div >
        <section className="text-gray-600  flex body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
        <div className="" />
        </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
          Featured Products
        </h1>
        
      </div>
    </div>
    <div className="flex  flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-[377px] w-[312px]"
            src="chair.2.png"
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h2>
        <p className="text-base leading-relaxed  font-semiboldmt-2">
          20$
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center gap-0 h-[312px] w-[312px]"
            
            src="cair3.png"
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h2>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"

            
            src="chair4.png"
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h2>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"

            
            src="chair5.png"
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h2>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Products