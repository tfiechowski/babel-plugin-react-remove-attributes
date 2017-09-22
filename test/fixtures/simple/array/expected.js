const arr = ['1', '2', '3'];

const e = <div>{arr.map(el => <span key={el} />)}</div>;
