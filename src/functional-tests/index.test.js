import { Selector, ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => window.location.href);

fixture `TDD Day Homepage`
  .page('https://tddday.com');

test('Page should load and display the correct title', async (t) => {
  const actual = Selector('h1').innerText;
  const expected = 'TDD DAY';
  await t.expect(actual).eql(expected);
});

test('Register button should navigate to registration page', async (t) => {
  const registerButton = Selector('span').withText('REGISTER NOW');
  const expected = 'https://zoom.us/webinar/register/WN_rYdjYdXFTPiHCsiWsnq0jA#/registration';

  await t.click(registerButton);

  await t.expect(getLocation()).eql(expected);
})