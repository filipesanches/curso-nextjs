export default function Estilo(props: any): JSX.Element {
  return (
    <>
      <div>
        <p style={{ backgroundColor: props.red ? 'red' : 'green', padding: props.padding ? '15px' : '5px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo ex deserunt debitis dignissimos inventore tempora expedita nemo, quisquam esse quidem dolores voluptatum eligendi
          placeat voluptatibus nobis accusamus, sapiente facilis?
        </p>
      </div>
    </>
  );
}
