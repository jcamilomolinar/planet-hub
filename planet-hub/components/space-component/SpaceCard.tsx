"use client";
import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AccomodationsData } from './types';


export default function SpaceCard({ fullDataSC }: { fullDataSC: AccomodationsData }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const fullText = fullDataSC.descripcion;

    const displayedText = isExpanded ? fullText : fullText.slice(0, 450) + '...';

    return (
        <div className="container mx-auto p-4 m-4">
            <p className="text-2xl font-semibold">{fullDataSC.nameExtend}</p>
            <div className="flex justify-normal gap-2">
                <FontAwesomeIcon icon={faStar} style={{ color: '#d46a17', fontSize: '24px' }} className="w-6 h-6" />
                <span>{fullDataSC.stars}</span>
                <span>-</span>
                <span>
                    <Link href='/reviews' className="underline decoration-solid hover:text-palleteOrange">
                        {fullDataSC.numberReviews} reseñas
                    </Link>
                </span>
            </div>
            <div className="p-2 m-3">

                <Dialog>
                    <DialogTrigger><p>{displayedText}</p><p className="underline decoration-solid hover:text-palleteOrange">Show more</p></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Cabaña Marte, Monte Olimpo</DialogTitle>
                            <DialogDescription>
                                {fullText}
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>


            </div>
        </div>
    );
}
