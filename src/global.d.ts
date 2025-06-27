import { MeshLineGeometry, MeshLineMaterial } from "meshline";

declare module "meshline" {
  export { MeshLineGeometry, MeshLineMaterial };
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
