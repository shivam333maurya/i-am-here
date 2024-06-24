"use client";
// TestModule.tsx
import React, { useState, useEffect } from "react";
import { Stage, Layer, Circle } from "react-konva";
import * as d3 from "d3";
import CustomLine from "./curved-line";

interface Node {
  id: string;
  x: number;
  y: number;
}
interface NodeData {
  name: string;
  children?: NodeData[];
}

const TestModule: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<{ source: string; target: string }[]>([]);

  useEffect(() => {
    // Sample data for tree structure
    const data: NodeData = {
      name: "Root",
      children: [{ name: "Child 1" }, { name: "Child 2" }, { name: "Child 3" }],
    };

    // Create D3 hierarchy and tree layout
    const hierarchy = d3.hierarchy(data);
    const treeLayout = d3
      .tree<NodeData>()
      .size([window.innerWidth, window.innerHeight - 200]);
    treeLayout(hierarchy);

    // Extract nodes and links from hierarchy
    const nodesData = hierarchy.descendants().map((node) => ({
      id: node.data.name,
      x: node.x,
      y: node.y,
    })) as Node[];

    const linksData = hierarchy.links().map((link) => ({
      source: link.source.data.name,
      target: link.target.data.name,
    }));

    setNodes(nodesData);
    setLinks(linksData);
  }, []);

  const handleNodeDragMove = (index: number, e: any) => {
    const updatedNodes = [...nodes];
    updatedNodes[index] = {
      ...updatedNodes[index],
      x: e.target.x(),
      y: e.target.y(),
    };
    setNodes(updatedNodes);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      className="absolute top-0"
    >
      <Layer>
        {links.map((link, index) => {
          const startNode = nodes.find((node) => node.id === link.source);
          const endNode = nodes.find((node) => node.id === link.target);
          if (startNode && endNode) {
            return (
              <CustomLine key={index} startNode={startNode} endNode={endNode} />
            );
          }
          return null;
        })}
        {nodes.map((node, index) => (
          <Circle
            key={index}
            x={node.x}
            y={node.y}
            radius={20}
            fill="blue"
            draggable
            onDragMove={(e) => handleNodeDragMove(index, e)}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export { TestModule };
