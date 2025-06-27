// src/global.d.ts
import { MeshLineMaterial, MeshLineGeometry } from "meshline";
import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ThreeElements["mesh"];
      meshLineMaterial: ThreeElements["mesh"];
    }
  }
}
