const rows = ['row1', 'row2'];
const items = [
  { icon: 'icon1', label: 'label1' },
  { icon: 'icon2', label: 'label2' },
  { icon: 'icon3', label: 'label3' },
];

<Container>
  {rows.map(row => (
    <Row key={row}>
      {items.map((item, index) => (
        <Item key={`item-${index}`}>
          <Icon>{item.icon}</Icon>
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Row>
  ))}
</Container>;
