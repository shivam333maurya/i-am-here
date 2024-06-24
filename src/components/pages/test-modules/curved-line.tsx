import React, { useState, useEffect } from "react";
import { Line } from "react-konva";

interface Node {
  id: string;
  x: number;
  y: number;
}

const CustomLine: React.FC<{ startNode: Node; endNode: Node }> = ({
  startNode,
  endNode,
}) => {
  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    const dx = endNode.x - startNode.x;
    const dy = endNode.y - startNode.y;
    const angle = Math.atan2(dy, dx);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const controlPointOffset = distance * 0.3;

    const controlPoint1 = {
      x: startNode.x + Math.cos(angle + Math.PI / 2) * controlPointOffset,
      y: startNode.y + Math.sin(angle + Math.PI / 2) * controlPointOffset,
    };

    const controlPoint2 = {
      x: endNode.x + Math.cos(angle - Math.PI / 2) * controlPointOffset,
      y: endNode.y + Math.sin(angle - Math.PI / 2) * controlPointOffset,
    };

    setPoints([
      startNode.x,
      startNode.y,
      controlPoint1.x,
      controlPoint1.y,
      controlPoint2.x,
      controlPoint2.y,
      endNode.x,
      endNode.y,
    ]);
  }, [startNode, endNode]);

  return (
    <Line
      points={points}
      stroke="black"
      tension={0.5} // Adjust tension for curve
      bezier
    />
  );
};

export default CustomLine;
