import { useState } from "react";

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF")

    const ColorHandler = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className="flex flex-col items-center my-8">
            <h1 className="m-50 text-5xl">Color Picker</h1>
            <div className="flex justify-center items-center w-80 h-80 border-4 rounded-3xl mb-6 duration-75 ease-linear" style={{ background: color }}>
                <p className="text-3xl text-center">Selected Color: {color}</p>
            </div>
            <label className="text-2xl font-medium mb-5">Select A color:</label>
            <input className="w-20 h-16 p-1.5 rounded-2xl" type="color" value={color} onChange={ColorHandler} />
        </div>
    );
}

export default ColorPicker