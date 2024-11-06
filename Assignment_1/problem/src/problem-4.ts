{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;
  const calculateShapeArea = (obj: Shape): number | string => {
    if (obj.shape === "circle") {
      return parseFloat((Math.PI * obj.radius *obj.radius).toFixed(2));
    } else if (obj.shape === "rectangle") {
      return obj.width * obj.height;
    }
    return "Unknown shap type";
  };
  const circle: Circle = {
    shape: "circle",
    radius: 5,
  };
  const rectangle: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };
  const  result1 =  calculateShapeArea(rectangle);
 const result2 =  calculateShapeArea(circle);
 console.log(result1, result2)
}
