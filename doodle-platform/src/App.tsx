import CanvasComponent from "./CanvasComponent"
import ToolbarComponent from "./ToolbarComponent"
import { useState } from "react"
const App = () => {
  const [selectedColor, setSelcetedColor] = useState("black");
  const handleColorChange = (color: string) => {
    setSelcetedColor(color);
    console.log("sett", { color });
  }
  return (
    <main>
      <h1 style={{
        color: " #333333",
        marginBottom: "20px",
        padding: " 4px 0"
      }}>Doodle-Platform</h1>
      <ToolbarComponent selectedColor={selectedColor} onColorChange={handleColorChange} ></ToolbarComponent>
      <CanvasComponent selectedColor={selectedColor}></CanvasComponent>
    </main>
  )
}

export default App
