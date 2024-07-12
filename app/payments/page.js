
export default function Payments () {
    return (
        <div className="pt-36 pb-14 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-bold text-4xl leading-10 text-black text-center">
                    Payments Summary
                </h2>
                <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Summary of your payments can be checked from below</p>
                
                <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full mb-10">
                    <div
                        className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                        <div className="data max-lg:text-center">
                            <p className="font-semibold text-sm leading-7 text-black">Transaction id:<span className="text-primary text-sm font-medium"> #10234987</span></p>
                            <p className="font-semibold text-sm leading-7 text-black mt-4">Date of payment:<span className="text-gray-400 text-sm font-medium"> 28th June 2024</span></p>
                        </div>
                        <button className="flex items-center justify-center gap-x-2 bg-orange-100 text-primary text-sm border border-primary rounded-md px-6 py-2 max-lg:mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                            Report Payment
                        </button>
                    </div>
                    <div className="w-full px-3 min-[400px]:px-6">
                        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div className="img-box max-lg:w-full mr-auto">
                                <svg className="aspect-square w-full lg:max-w-[140px]" width="140px" height="140px" viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                                    <rect x="-102.4" y="-102.4" width="1228.80" height="1228.80" rx="245.76" fill="#ff4a00" strokewidth="0"/>
                                    </g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" style={{fill: '#ff4a00'}}/> <path d="M576 512.11a153.09 153.09 0 0 1-9.83 54 153.19 153.19 0 0 1-54.06 9.89h-.22a153.18 153.18 0 0 1-54-9.83 153.16 153.16 0 0 1-9.89-54.06v-.22a153.33 153.33 0 0 1 9.83-54 153.14 153.14 0 0 1 54.06-9.89h.22a153.08 153.08 0 0 1 54.06 9.84 153.07 153.07 0 0 1 9.83 54v.22zm188.44-42.78H615l105.67-105.66A257.2 257.2 0 0 0 693 331a257.4 257.4 0 0 0-32.67-27.63L554.67 409V259.56a257.63 257.63 0 0 0-42.53-3.56h-.27a257.63 257.63 0 0 0-42.53 3.56V409L363.67 303.33A257.34 257.34 0 0 0 331 331a257.23 257.23 0 0 0-27.62 32.65L409 469.33H259.56S256 497.4 256 511.91v.18a257.69 257.69 0 0 0 3.56 42.58H409L303.33 660.33a257.46 257.46 0 0 0 60.34 60.34L469.33 615v149.44a257.73 257.73 0 0 0 42.49 3.56h.37a257.85 257.85 0 0 0 42.48-3.56V615l105.66 105.67A257.34 257.34 0 0 0 693 693a257.52 257.52 0 0 0 27.64-32.67L615 554.67h149.44a257.73 257.73 0 0 0 3.56-42.49v-.37a257.84 257.84 0 0 0-3.56-42.48z" style={{fill: '#fff'}}/> </g>
                                </svg>
                            </div>
                            <div className="flex flex-row items-center w-full max-lg:text-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                    <div className="flex items-center w-full">
                                        <div className="w-full">
                                            <h2 className="font-semibold w-full text-xl leading-8 text-black mb-3">Monthly Plan Renewal</h2>
                                            <p className="font-normal text-md leading-8 text-gray-500 mb-3 ">Plan includes: 100 Job Postings/Month + Analytics</p>
                                            <div className="flex items-center max-lg:justify-center">
                                                <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Validity: 
                                                    <span className="text-gray-500"> 1 Month</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-5">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Price</p>
                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-primary">$100</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">Payment successful</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">Next renewal date</p>
                                                <p className="font-medium text-sm whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">29th July 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 px-6 max-lg:px-0 flex flex-col lg:flex-row items-center justify-between ">
                        <div className="flex w-full flex-col sm:flex-row items-center max-lg:justify-center max-lg:border-b border-gray-200">
                            <p className="font-medium text-sm text-gray-900 py-3 max-lg:text-center">Paid using Credit Card <span className="text-gray-500">ending with 4312</span></p>
                        </div>
                        <p className="font-semibold text-sm text-nowrap text-black py-6">Total Price: <span className="text-primary"> $100.00</span></p>
                    </div>
                </div>

                <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full mb-10">
                    <div
                        className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                        <div className="data max-lg:text-center">
                            <p className="font-semibold text-sm leading-7 text-black">Transaction id:<span className="text-primary text-sm font-medium"> #10232386</span></p>
                            <p className="font-semibold text-sm leading-7 text-black mt-4">Date of payment:<span className="text-gray-400 text-sm font-medium"> 28th May 2024</span></p>
                        </div>
                        <button className="flex items-center justify-center gap-x-2 bg-orange-100 text-primary text-sm border border-primary rounded-md px-6 py-2 max-lg:mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                            Report Payment
                        </button>
                    </div>
                    <div className="w-full px-3 min-[400px]:px-6">
                        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div className="img-box max-lg:w-full mr-auto">
                                <svg className="aspect-square w-full lg:max-w-[140px]" width="140px" height="140px" viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                                    <rect x="-102.4" y="-102.4" width="1228.80" height="1228.80" rx="245.76" fill="#ff4a00" strokewidth="0"/>
                                    </g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" style={{fill: '#ff4a00'}}/> <path d="M576 512.11a153.09 153.09 0 0 1-9.83 54 153.19 153.19 0 0 1-54.06 9.89h-.22a153.18 153.18 0 0 1-54-9.83 153.16 153.16 0 0 1-9.89-54.06v-.22a153.33 153.33 0 0 1 9.83-54 153.14 153.14 0 0 1 54.06-9.89h.22a153.08 153.08 0 0 1 54.06 9.84 153.07 153.07 0 0 1 9.83 54v.22zm188.44-42.78H615l105.67-105.66A257.2 257.2 0 0 0 693 331a257.4 257.4 0 0 0-32.67-27.63L554.67 409V259.56a257.63 257.63 0 0 0-42.53-3.56h-.27a257.63 257.63 0 0 0-42.53 3.56V409L363.67 303.33A257.34 257.34 0 0 0 331 331a257.23 257.23 0 0 0-27.62 32.65L409 469.33H259.56S256 497.4 256 511.91v.18a257.69 257.69 0 0 0 3.56 42.58H409L303.33 660.33a257.46 257.46 0 0 0 60.34 60.34L469.33 615v149.44a257.73 257.73 0 0 0 42.49 3.56h.37a257.85 257.85 0 0 0 42.48-3.56V615l105.66 105.67A257.34 257.34 0 0 0 693 693a257.52 257.52 0 0 0 27.64-32.67L615 554.67h149.44a257.73 257.73 0 0 0 3.56-42.49v-.37a257.84 257.84 0 0 0-3.56-42.48z" style={{fill: '#fff'}}/> </g>
                                </svg>
                            </div>
                            <div className="flex flex-row items-center w-full max-lg:text-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                    <div className="flex items-center w-full">
                                        <div className="w-full">
                                            <h2 className="font-semibold w-full text-xl leading-8 text-black mb-3">Starter Plan</h2>
                                            <p className="font-normal text-md leading-8 text-gray-500 mb-3 ">Plan includes: 100 Job Postings/Month + Analytics</p>
                                            <div className="flex items-center max-lg:justify-center">
                                                <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Validity: 
                                                    <span className="text-gray-500"> 1 Month</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-5">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Price</p>
                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-primary">$100</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">Payment successful</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:justify-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">Next renewal date</p>
                                                <p className="font-medium text-sm whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">29th June 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 px-6 max-lg:px-0 flex flex-col lg:flex-row items-center justify-between ">
                        <div className="flex w-full flex-col sm:flex-row items-center max-lg:justify-center max-lg:border-b border-gray-200">
                            <p className="font-medium text-sm text-gray-900 py-3 max-lg:text-center">Paid using Credit Card <span className="text-gray-500">ending with 8822</span></p>
                        </div>
                        <p className="font-semibold text-sm text-nowrap text-black py-6">Total Price: <span className="text-primary"> $100.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}