const expect = require('expect');

const { isRealString, isNameTaken } = require('./validation');
const { Users } = require('./users');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const result = isRealString(123);
    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const result = isRealString('                  ');
    expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const result = isRealString('node is fun');
    expect(result).toBe(true);
  });
});

describe('isNameTaken', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Ricardo',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Eric',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Cardax',
        room: 'Node Course'
      }
    ];
  });

  it('should reject if user name already taken', () => {
    const result = isNameTaken(users.users, 'Ricardo');
    expect(result).toBe(true);
  });

  it('should reject if user name already taken, ignore case-sensitive', () => {
    const result = isNameTaken(users.users, 'rIcArdO');

    expect(result).toBe(true);
  });

  it('should allow if user name not yet exist', () => {
    const result = isNameTaken(users.users, 'petmalu');

    expect(result).toBe(false);
  });
});
