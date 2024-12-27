import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
    {
        name: "Phones",
        icon: Smartphone,
        active: false
    },
    {
        name: "Computers",
        icon: Monitor,
        active: false
    },
    {
        name: "SmartWatch",
        icon: Watch,
        active: false
    },
    {
        name: "Camera",
        icon: Camera,
        active: true
    },
    {
        name: "HeadPhones",
        icon: Headphones,
        active: false
    },
    {
        name: "Gaming",
        icon: Gamepad,
        active: false
    }
]

export default function BrowseCategories() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col gap-4 sm:gap-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-[#DB4444] rounded-[4px]" />
                            <span className="text-[#DB4444] text-sm sm:text-base font-semibold">Categories</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold">Browse By Category</h2>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                        <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-[#00000066]">
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-[#00000066]">
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-[30px]">
                    {categories.map((category) => (
                        <div 
                            key={category.name}
                            className={cn(
                                "flex flex-col items-center justify-center p-6 sm:p-8 border rounded-[4px] hover:bg-[#DB4444] hover:text-white transition-colors cursor-pointer group",
                                category.active && "bg-[#DB4444] text-white"
                            )}
                        >
                            <category.icon 
                                className={cn(
                                    "w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4",
                                    category.active ? "stroke-white" : "stroke-black group-hover:stroke-white"
                                )} 
                            />
                            <span className="text-sm sm:text-base font-medium text-center">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

