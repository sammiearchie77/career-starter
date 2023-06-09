import Card from "./Card";

export default function Features({ header, subHeader, image }){
    return (
        <div className="md:mx-[5rem] sm:mx-5">
                <h1 className="font-bold sm:text-4xl text-3xl text-center mb-10 text-indigo-600">{ header }</h1>
                <div className="md:grid grid-cols-2 gap-4 ">
                    <img 
                        className="-translate-y-6 rounded-lg ring-2 ring-indigo-600 skew-y-3"
                        src={image} 
                        alt={header} 
                        width={500}
                    />
                    <Card
                        cardTitle={subHeader}
                    >
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </Card>
                </div>
            </div>
    );
}