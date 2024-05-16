import { Button } from "@/components/ui/Button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"

function QueryCardSkeleton() {

    return (
        <div className='m-5'>
            <Card className="text-sm">
                <CardHeader>
                    <CardTitle>Loading...</CardTitle>
                    <CardDescription>Loading...</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Loading...</p>
                </CardContent>
                <CardFooter className="gap-5">
                    <Button variant="ghost">Comment query</Button>
                    <Button variant="ghost">Open in Query Builder</Button>
                    <Button variant="ghost">Delete Query</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default QueryCardSkeleton;