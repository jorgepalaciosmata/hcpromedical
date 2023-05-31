
const formatFileSystem = (files) => {

  const fileSystem = {
    '1382b6993e9f270cb1c29833be3f5750': {
      type: '__folder__',
      name: 'Main',
      path: '/',
      size: 0,
      date: '2019-04-07',
      creatorName: 'admin',
      parentPath: null,
      parentID: null,
      children: files && files.length > 0 ? 
      files.map(function (item) {
        return item.name;
      }) : []
    }
  };

  files.map(function(item) {
    fileSystem[item.name] = {
      type: '__file__',
      name: formatFilename(item.name),
      date: item.created,
      parentID: 'root',
      parentPath: '/',
      path: '/' + item.name
    }
  });

  localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
  return fileSystem;
};

const formatFilename = (filename) => {
  return filename.substring(37);
};

export default formatFileSystem;
