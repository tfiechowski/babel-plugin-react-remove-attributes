const rows = ['row1', 'row2'];
const items = [
  { icon: 'icon1', label: 'label1' },
  { icon: 'icon2', label: 'label2' },
  { icon: 'icon3', label: 'label3' },
];

<Container data-test-id="container">
  {rows.map(row => (
    <Row key={row} data-test-class="row">
      {items.map((item, index) => (
        <Item key={`item-${index}`} data-test-item="item">
          <Icon data-test-icon="this doesn't make sense">{item.icon}</Icon>
          <Label data-test-label="this either">{item.label}</Label>
        </Item>
      ))}
    </Row>
  ))}
</Container>;
