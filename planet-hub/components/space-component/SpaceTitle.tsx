import * as React from "react"

export default function SpaceTitle() {
    return (
        <div className='flex justify-between items-center p-4  '>
            {/* Title Div */}
            <div>
                <p className='text-textTitle text-4xl font-bold '>Cabaña Marte Baratica.</p>
            </div>

            {/* Div compartir, megusta */}
            <div className='flex justify-normal gap-4'>
                {/* Div compartir */}
                <div>
                    🔗 Compartir
                </div>
                {/* Div megusta */}
                <div>
                    ❤️ Me gusta
                </div>
            </div>
        </div>
    )
}

