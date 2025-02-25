import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export default function RecipeList({ recipelist }) {
    console.log("recipelist", recipelist)
    return (
        <div className="mx-auto p-4 lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8">
                {recipelist && recipelist.map((item) => {
                    <Link href={`/receipe-list/${item.id}`}>
                        <Card>
                            <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
                                <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-top" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>


                })}
            </div>


        </div>

    )
}