const dummyFileSystem = {
  '1382b6993e9f270cb1c29833be3f5750': {
    type: '__folder__',
    name: 'Jorge Palacios',
    path: '/',
    size: 0,
    date: '2019-04-07',
    creatorName: 'admin',
    parentPath: null,
    parentID: null,
    children: [
      'ab7e413a3798155e37a9361140522e39'
    ]
  },
  ab7e413a3798155e37a9361140522e39: {
    type: '__file__',
    name: 'a.pdf',
    creatorName: 'Shubham Singh',
    size: 234,
    date: '2019-04-29',
    parentID: '1382b6993e9f270cb1c29833be3f5750',
    parentPath: '/',
    path: '/a.pdf'
  },
};

const generatedummyFileSystem = () => {
  localStorage.setItem('fileSystem', JSON.stringify(dummyFileSystem));
  return dummyFileSystem;
};

export default generatedummyFileSystem;
