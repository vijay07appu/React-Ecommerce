import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'
import { FcBusinessman } from "react-icons/fc";

function Testimonial() {
    const context = useContext(MyContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">As a customer, I appreciate this website with intuitive navigation, visually appealing product displays, and a seamless checkout process. This platform offers clear product descriptions, helpful customer reviews, and responsive customer support, ensuring a satisfying shopping experience from start to finish.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vijay JD</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Happy Customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">As a customer, I appreciate this website with intuitive navigation, visually appealing product displays, and a seamless checkout process. This platform offers clear product descriptions, helpful customer reviews, and responsive customer support, ensuring a satisfying shopping experience from start to finish.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Varsha</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Happy Customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/236/236832.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">As a customer, I appreciate this website with intuitive navigation, visually appealing product displays, and a seamless checkout process. This platform offers clear product descriptions, helpful customer reviews, and responsive customer support, ensuring a satisfying shopping experience from start to finish.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Varun</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial