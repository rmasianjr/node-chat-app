const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Ricardo';
    const text = 'Testing generateMessage';
    const message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Eric';
    const latitude = 123;
    const longitude = 123;
    const url = 'https://www.google.com/maps?q=123,123';
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({ from, url });
    expect(message.createdAt).toBeA('number');
  });
});
