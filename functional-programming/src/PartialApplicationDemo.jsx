export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

function getPropertyWithDefault(key, defaultValue, obj) {
  if (key in obj) {
    return obj[key];
  }
  return defaultValue;
}

// getPropertyWithDefault("name", "N/A", { name: "Joe", age: 32 });
// getPropertyWithDefault("name", "N/A", { name: "Bill", age: 32 });
// getPropertyWithDefault("name", "N/A", { name: "Jane", age: 32 });
// getPropertyWithDefault("name", "N/A", { name: "Betty", age: 32 });

// 👆 Working with this fn is a pain if we're mostly changing one param each time we call it

function getName(obj) {
    return getPropertyWithDefault('name', 'N/A', obj)
}
getName({name: 'Joe', age: 77}) // better

