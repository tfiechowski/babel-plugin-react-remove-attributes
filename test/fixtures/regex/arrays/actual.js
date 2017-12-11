const arr = ['1', '2', '3'];

const e = (
  <div>
    {arr.map(el => (
      <span
        key={el}
        data-test-id={`span-key-${el}`}
        data-test-yolo={`span-key-${el}`}
        data-immune="catch me if you can"
      />
    ))}
  </div>
);
