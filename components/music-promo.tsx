import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MusicPromo() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="relative overflow-hidden rounded-lg border border-[#0000FF]">
                <div className="bg-black text-white p-6 sm:p-12 min-h-[400px] sm:min-h-[500px] flex flex-col sm:flex-row items-center">
                    {/* Left Content */}
                    <div className="w-full sm:w-1/2 z-10">
                        <span className="text-[#00FF66] text-sm sm:text-base mb-4 block">Categories</span>
                        <h2 className="text-3xl sm:text-5xl font-semibold mb-8 sm:mb-12 leading-tight">
                            Enhance Your
                            <br />
                            Music Experience
                        </h2>

                        {/* Timer Circles */}
                        <div className="flex gap-4 mb-8">
                            <div className="bg-white rounded-full w-16 sm:w-20 h-16 sm:h-20 flex flex-col items-center justify-center text-black">
                                <span className="text-lg sm:text-xl font-bold">23</span>
                                <span className="text-xs sm:text-sm">Hours</span>
                            </div>
                            <div className="bg-white rounded-full w-16 sm:w-20 h-16 sm:h-20 flex flex-col items-center justify-center text-black">
                                <span className="text-lg sm:text-xl font-bold">05</span>
                                <span className="text-xs sm:text-sm">Days</span>
                            </div>
                            <div className="bg-white rounded-full w-16 sm:w-20 h-16 sm:h-20 flex flex-col items-center justify-center text-black">
                                <span className="text-lg sm:text-xl font-bold">69</span>
                                <span className="text-xs sm:text-sm">Minutes</span>
                            </div>
                            <div className="bg-white rounded-full w-16 sm:w-20 h-16 sm:h-20 flex flex-col items-center justify-center text-black">
                                <span className="text-lg sm:text-xl font-bold">35</span>
                                <span className="text-xs sm:text-sm">Seconds</span>
                            </div>
                        </div>

                        <Button 
                            className="bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-medium px-8 h-12 rounded"
                        >
                            Buy Now!
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full sm:w-1/2 relative h-[200px] sm:h-full mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-0">
                        <Image
                            src="/images/products/jbl-speaker.png"
                            alt="JBL Speaker"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

