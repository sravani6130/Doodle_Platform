import { useEffect, useRef, useState } from "react";
type CanvasProps={
    selectedColor:string;
};
const CanvasComponent = ({selectedColor}:CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const { width, height } = canvas.getBoundingClientRect();
            // console.log(width,height)
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.lineCap = "round";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 5;
                // ctx.fillStyle="blue";
                // ctx.fillRect(0,0,100,100);
                setCanvasContext(ctx);
            }
        }
    }, [])
    useEffect(()=>{
        // console.log("changedcolor",selectedColor);
        if(canvasContext){
            canvasContext.strokeStyle =selectedColor;
        }
    },[selectedColor,canvasContext]);
    const getMouseCoordinates = (event) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return { x: 0, y: 0 };
        }
        console.log({ event });
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }
    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        console.log("staart");
        if (!canvasContext) {
            return;
        }
        const { x, y } = getMouseCoordinates(event);
        console.log({ x, y })
        canvasContext.beginPath();
        canvasContext.moveTo(x, y);
        setIsDrawing(true);
    };
    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        console.log("draw");
        if (!isDrawing || !canvasContext) return;
        const { x, y } = getMouseCoordinates(event);
        canvasContext.lineTo(x, y);
        canvasContext.stroke();
    };
    const stopDrawing = () => {
        console.log("stop");
        if (!canvasContext) {
            return;
        }
        canvasContext.closePath();
        setIsDrawing(false);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
        }}>
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                onMouseLeave={stopDrawing}
                ref={canvasRef} id="doodleCanvas" style={{
                    border: "2px solid #333333",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    width: "60%",
                    height: "50%",
                    cursor: "crosshair"
                }}>

            </canvas>
        </div>
    )
}
export default CanvasComponent;