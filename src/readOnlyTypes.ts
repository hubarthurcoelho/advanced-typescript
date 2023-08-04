type Point3D = {
  x: number;
  y: number;
  z: number;
}

type ReadPoint3D = Readonly<Point3D>;

const obj: Readonly<Point3D> = {
  x: 1,
  y: 1,
  z: 1
}

// obj.x = 1 // cant assign
