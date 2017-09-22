const children = ["John Lemon", "Yoko Ono"];

<Parent data-test-id="parent">
  {children.map((child, index) => (
    <Child data-test-id={`child-${index}`}>I'll be a child forever!</Child>
  ))}
</Parent>;
