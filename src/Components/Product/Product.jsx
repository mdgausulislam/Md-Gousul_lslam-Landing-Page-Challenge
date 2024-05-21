// import React from 'react';
// import product1 from '../../assets/Product image/1.png'
// const Product = () => {
//     return (
//         <div className='container mx-auto py-5 px-4 md:px-28'>
//             <h1 className='text-3xl font-bold pb-3'>Our Product</h1>
//             <div className='flex justify-between items-center'>
//                 <div>
//                     <p>Experience crystal clear vision and elevated style with our <br />premium collection of eyeglasses.</p>
//                 </div>
//                 <div className="join join-vertical lg:join-horizontal">
//                     <button className="btn join-item">Latest</button>
//                     <button className="btn join-item">Special</button>
//                     <button className="btn join-item">Best Cell</button>
//                 </div>
//             </div>
//             <div className='grid grid-cols-3 gap-5'>
//                 <div className="card w-[340px] bg-base-100 shadow-xl">
//                     <figure className="px-10 pt-10">
//                         <img src={product1} alt="Shoes" className="rounded-xl" />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">Bravo Sunglasses</h2>
//                         <div className='flex'>
//                             <span>$100</span>
//                             <span>$150</span>
//                         </div>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card w-[340px] bg-base-100 shadow-xl">
//                     <figure className="px-10 pt-10">
//                         <img src={product1} alt="Shoes" className="rounded-xl" />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">Shoes!</h2>
//                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card w-[340px] bg-base-100 shadow-xl">
//                     <figure className="px-10 pt-10">
//                         <img src={product1} alt="Shoes" className="rounded-xl" />
//                     </figure>
//                     <div className="card-body items-center text-center">
//                         <h2 className="card-title">Shoes!</h2>
//                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div className="card-actions">
//                             <button className="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Product;


import React from 'react';
import CartItem from '../../Pages/CartItem/CartItem';

const Product = () => {
    return (
        <div className='lg: container mx-auto py-5 px-4 lg:px-28'>
            <h1 className='text-3xl font-bold pb-3'>Our Product</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Experience crystal clear vision and elevated style with our <br />premium collection of eyeglasses.</p>
                </div>
                <div className="join join-vertical lg:join-horizontal">
                    <button className="btn join-item">Latest</button>
                    <button className="btn join-item">Special</button>
                    <button className="btn join-item">Best Seller</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                <CartItem id={1} />
                <CartItem id={2} />
                <CartItem id={3} />
                <CartItem id={4} />
                <CartItem id={5} />
                <CartItem id={6} />
            </div>
        </div>
    );
};

export default Product;

