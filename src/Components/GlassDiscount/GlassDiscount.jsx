// import React from 'react';
// import discount1 from '../../assets/discount/Image (1).png'
// import discount2 from '../../assets/discount/Image (2).png'
// import discount3 from '../../assets/discount/Image (3).png'
// import discount4 from '../../assets/discount/Image (4).png'
// import './GlassDiscount.css'

// const GlassDiscount = () => {
//     return (
//         <div class="container px-28 m-auto py-40">
//             <div class="flex flex-row space-x-4">
//                 <div class="flex w-full flex-col space-y-4">
//                     <section class="h-[600px] gap-6" >
//                         <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
//                             <img class="w-full" src={discount1} alt="" />
//                             <div class="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 lg:w-[400px] w-full lg:absolute top-72 h-[180px] rounded-lg text-center">
//                                 <h2 class="text-xl font-bold mt-4 md:mt-4">Bravo Sunglasses</h2>
//                                 <p class="my-3 font-normal text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
//                                 <button class="buyButton1">Buy Now</button>
//                             </div>
//                         </section>
//                     </section>
//                     <section class="h-[400px] gap-6" style={{ marginTop: "-55px" }}>
//                         <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
//                             <img class="w-full" src={discount3} alt="" />
//                             <div class="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 lg:w-[400px] w-full lg:absolute top-52 h-[180px] rounded-lg text-center">
//                                 <h2 class="text-2xl font-semibold mt-4 md:mt-4">Bravo Sunglasses</h2>
//                                 <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
//                                 <button class="buyButton1">Buy Now</button>
//                             </div>
//                         </section>
//                     </section>
//                 </div>
//                 <div class="flex w-full flex-col space-y-4">
//                     <section class="h-[400px]">
//                         <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
//                             <img class="w-full" src={discount2} alt="" />
//                             <div class="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 lg:w-[400px] w-full lg:absolute top-52 h-[180px] rounded-lg text-center">
//                                 <h2 class="text-2xl font-semibold mt-4 md:mt-4">Bravo Sunglasses</h2>
//                                 <p class="my-3 font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
//                                 <button class="buyButton1">Buy Now</button>
//                             </div>
//                         </section>
//                     </section>
//                     <section class="h-[600px] pt-7">
//                         <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
//                             <img class="w-full" src={discount4} alt="" />
//                             <div class="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 lg:w-[400px] w-full lg:absolute h-[180px] topdis-4 rounded-lg text-center">
//                                 <h2 class="text-2xl font-semibold mt-4 md:mt-4">Bravo Sunglasses</h2>
//                                 <p class="my-3 font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
//                                 <button class="buyButton1">Buy Now</button>
//                             </div>
//                         </section>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GlassDiscount;


import React from 'react';
import discount1 from '../../assets/discount/Image (1).png'
import discount2 from '../../assets/discount/Image (2).png'
import discount3 from '../../assets/discount/Image (3).png'
import discount4 from '../../assets/discount/Image (4).png'
import './GlassDiscount.css'

const GlassDiscount = () => {
    return (
        <div className="container mx-auto py-5 px-4 md:px-28">
            <div className="flex flex-col md:flex-row space-y-32 md:space-y-0 md:space-x-4 discount-container">
                <div className="flex w-full flex-col space-y-24 md:space-y-4">
                    <section className="productDiscount-1">
                        <div className="relative transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
                            <img className="w-full h-full object-cover" src={discount1} alt="Discount 1" />
                            <div className="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 w-full lg:w-[400px] lg:absolute top-80 h-[180px] rounded-lg text-center">
                                <h2 className="text-xl font-bold mt-4">Bravo Sunglasses</h2>
                                <p className="my-3 font-normal text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
                                <button className="buyButton1">Buy Now</button>
                            </div>
                        </div>
                    </section>
                    <section className="productDiscount-2">
                        <div className="relative transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
                            <img className="w-full h-full object-cover" src={discount3} alt="Discount 3" />
                            <div className="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 w-full lg:w-[400px] lg:absolute top-52 h-[180px] rounded-lg text-center">
                                <h2 className="text-2xl font-semibold mt-4">John Jacobs</h2>
                                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
                                <button className="buyButton1">Buy Now</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex w-full flex-col space-y-20 md:space-y-4">
                    <section className="productDiscount-3">
                        <div className="relative transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
                            <img className="w-full h-full object-cover" src={discount2} alt="Discount 2" />
                            <div className="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 w-full lg:w-[400px] lg:absolute top-52 h-[180px] rounded-lg text-center">
                                <h2 className="text-2xl font-semibold mt-4">Tommy Hilfiger</h2>
                                <p className="my-3 font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
                                <button className="buyButton1">Buy Now</button>
                            </div>
                        </div>
                    </section>
                    <section className="productDiscount-4">
                        <div className="relative transform duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center">
                            <img className="w-full h-full object-cover" src={discount4} alt="Discount 4" />
                            <div className="content flex flex-col items-center justify-center bg-white p-2 pt-8 md:p-4 pb-4 w-full lg:w-[400px] lg:absolute top-80 h-[180px] rounded-lg text-center">
                                <h2 className="text-2xl font-semibold mt-4">Vincent Chase</h2>
                                <p className="my-3 font-medium text-gray-700 leading-relaxed">Up to 80% off on selected item.</p>
                                <button className="buyButton1">Buy Now</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GlassDiscount;
