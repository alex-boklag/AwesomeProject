export const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
mock.onGet('/images').reply(200, {
  images: [
    {
      id: '2020-04-26T16:38:45.602Z',
      uri:
        'content://com.awesomeproject.provider/root/storage/emulated/0/Pictures/images/image-c2350590-7dad-4fa4-bb63-4fe75bce0500.jpg',
      date: '26.04.2020 at 16:38',
    },
    {
      id: '2020-04-27T13:14:45.602Z',
      uri:
        'content://com.awesomeproject.provider/root/storage/emulated/0/Pictures/images/image-fb04bbee-f924-486b-ac96-67fd3437ff0c.jpg',
      date: '27.04.2020 at 13:14',
    },
    {
      id: '2020-04-27T17:32:09.916Z',
      uri:
        'content://com.awesomeproject.provider/root/storage/emulated/0/Pictures/images/image-b120294c-a6fc-4dc6-93c7-840106c93fb7.jpg',
      date: '27.04.2020 at 17:32',
    },
  ],
});