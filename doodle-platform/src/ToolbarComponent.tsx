const PREDEFINED_COLORS = [
    "#1e1e1e",
    "#b10909",
    "#10b310",
    "#d0b60a",
    "#e8e8e8",
];
interface ToolbarProps {
    selectedColor: string;
    onColorChange: (color: string) => void;

};
const ToolbarComponent = ({ selectedColor, onColorChange }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: " 8px",
            margin: "0 auto",
            maxWidth: "600px",

        }}>
            {/* custom Color Picker*/}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <label htmlFor="colorPicker" style={{
                    fontWeight: "bold",
                    alignSelf: "center"
                }}>Custom Color: </label>
                <input type="color"
                    style={{
                        width: "50px",
                        height: "40px",
                        border: `3px solid ${selectedColor}`,
                        borderRadius: "8px",
                        cursor: "pointer"
                    }} id="colorPicker"
                    value={selectedColor}
                    onChange={(e) => onColorChange(e.target.value)}
                    title="Choose custom color"
                ></input>
            </div>
            {/* separator*/}
            <div style={{ width: "2px", height: "40px", 
                backgroundColor:"#ccc",
                borderRadius:"4px",
            }}></div>
            {/* predefined Color Picker*/}
            <label style={{
                fontWeight: "bold",
                alignSelf: "center"
            }}>Colors:</label>

            {PREDEFINED_COLORS.map((color) => (
                <button key={color}
                    title={'Select color ${color}'}
                    aria-label={'Select color ${clor}'}
                    onClick={() => onColorChange(color)}
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: color,
                        borderRadius: "50%",
                        cursor: "pointer",
                        border: selectedColor == color ? "3px solid  #2d2de5" : "2px solid"
                    }}

                ></button>
            ))}

        </div>
    )
}

export default ToolbarComponent;
